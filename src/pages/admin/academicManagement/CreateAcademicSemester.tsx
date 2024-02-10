import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";

const CreateAcademicSemester = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name"></PHInput>
    </PHForm>
  );
};

export default CreateAcademicSemester;
