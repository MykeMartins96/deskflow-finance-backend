import { GoogleGenAI } from "@google/genai";

export async function analyzeTasks(req, res) {
  try {
    const { tasks } = req.body;

    if (!tasks || tasks.length === 0) {
      return res.status(400).json({
        message: "Nenhuma tarefa foi enviada para análise.",
      });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const tasksText = tasks
      .map((task, index) => {
        return `
Tarefa ${index + 1}

Título: ${task.title}
Descrição: ${task.description || "Sem descrição"}
Status: ${task.status}
Prioridade: ${task.priority}
Prazo: ${task.dueDate || "Sem prazo definido"}
`;
      })
      .join("\n");

    const prompt = `
Você é um assistente de produtividade.

Analise as tarefas abaixo e dê uma recomendação curta e objetiva para o usuário.

Considere:
- prioridade;
- tarefas pendentes;
- prazos;
- organização;
- qual tarefa deve ser feita primeiro.

Não invente tarefas.
Use apenas as informações fornecidas.

Tarefas:

${tasksText}

Responda em português do Brasil, de forma clara e objetiva.

Regras para a resposta:
- use no máximo 5 linhas;
- não utilize Markdown;
- não utilize asteriscos;
- não utilize títulos;
- escreva apenas texto simples;
- diga claramente qual tarefa deve ser feita primeiro;
- ao mencionar uma tarefa, utilize somente o título da tarefa;
- não utilize expressões como "Tarefa 1", "Tarefa 2" ou números para identificar as tarefas.
`;

    const response = await ai.interactions.create({
      model: "gemini-3.7-flash",
      input: prompt,
    });

    return res.status(200).json({
      analysis: response.output_text,
    });
  } catch (error) {
    console.error("Erro ao analisar tarefas com IA:", error);

    // Limite de requisições/cota da API Gemini
    if (
      error?.statusCode === 429 ||
      error?.status === 429 ||
      error?.error?.code === "too_many_requests"
    ) {
      return res.status(429).json({
        message:
          "O limite temporário da IA foi atingido. Aguarde alguns instantes e tente novamente.",
      });
    }

    return res.status(500).json({
      message: "Erro ao analisar tarefas com IA.",
    });
  }
}