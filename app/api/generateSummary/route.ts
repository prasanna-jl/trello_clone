import openai from "@/openai";
import { NextResponse } from "next/server";
export async function POST(request:Request){
    const {todos}=await request.json();
    console.log(todos);
    const response = await openai.createChateCompletion({
        model : "gpt-3.5-turbo",
        temperature:0.8,
        n:1,
        stream:false,
        messages: [
            {
                role:'system',
                content:`when responding , welcome the user always as Lakshmi Prasanna and say welcome to the trell app! limit the response to 200 characters`
            },
            {
                role:'user',
                content:`hi there, provide a summary of the following todos count how many todos are in each category such as To do , in progress and done , then tell the user to have a productive day! here's the data: ${JSON.stringify(
                    todos
                )}`,
            },
        ],
    });
    const {data}=response;
    console.log('DATA IS',data);
    console.log(data.choices[0].messages);
    return NextResponse.json(data.choices[0].message);

}