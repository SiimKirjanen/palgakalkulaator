import client from "@/lib/openai";

export async function POST(request: Request) {
  try {
    const { input } = await request.json();

    if (!input) {
      return Response.json(
        { error: "The 'input' parameter is required." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4o",
      input,
    });

    return Response.json({ response: response.output_text });
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);

    return Response.json(
      { error: "Failed to fetch data from OpenAI" },
      { status: 500 }
    );
  }
}
