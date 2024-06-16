



type TParams= {
    params:{
        petId: string;
    }
}


const EditPetPage = ({params}:TParams) => {

    const {petId} = params;
    console.log(petId);


  return (
     <div>
         <h1>This is EditPetPage component</h1>
     </div>
  )
};

export default EditPetPage;