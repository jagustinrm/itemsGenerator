import { NextResponse } from "next/server";
import CreateCustomArmor from "../../../../lib/createCustomArmor";
import { deleteDeletableArmorsFromFirebase } from "../../../../firebase/saveArmorToFirebase";
export async function GET(request: Request) {
    try {
        return NextResponse.json({status: 200})
    } catch (error) {
        console.error('Request failed', error)
        return NextResponse.json({status: 500})
    }
}

export async function POST (request: Request) {
    const { createArmor } = CreateCustomArmor();
    try {
       
        const armor = await createArmor(); 
        console.log(armor)
        return NextResponse.json({ status: 200, message: armor });
    } catch (error) {
        console.error("POST request failed:", (error as Error).message);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
}

    export async function DELETE (request: Request) {
        try {
            // Llamar a la función para eliminar todas las armaduras con deletable: true
            const deletedArmors = await deleteDeletableArmorsFromFirebase();
        
            return NextResponse.json(
              {
                message: `Se eliminaron armaduras con 'deletable: true'.`,
                deletedArmors,
              },
              { status: 200 }
            );
          } catch (error) {
            console.error('Error al procesar la solicitud DELETE:', error);
            return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
          }
        }
    