import { useEffect, useState } from "react";
import { RecipeSumary } from "../types";
import * as RecipeAPI from "../api";


interface Props {
    recipeId: string;
    onClose: ()=> void;
}

const RecipeModal = ({ recipeId, onClose }: Props) => {
    const [recipeSummary, setRecipeSummary] = useState<RecipeSumary>();

    useEffect(() =>{
        const fetchRecipeSummary = async()=>{
            try {
                const summaryRecipe = await RecipeAPI.getRecipeSummary(recipeId);
                setRecipeSummary(summaryRecipe);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRecipeSummary();
    }, [recipeId]);

    if(!recipeSummary){
        return <></>;
    }
    

    return (
        <>
            <div className="overlay"></div>
            <div className="model">
                <div className="model-content">
                    <div className="model-header">
                        <h2>{recipeSummary?.title}</h2>
                        <span className="close-btn" onClick={onClose}>&times;</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: recipeSummary.summary}}></p>
                </div>
            </div>
        </>
    );
}

export default RecipeModal;