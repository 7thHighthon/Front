import { useRecoilState } from "recoil";
import { SubmitData } from "../../Store/SubmitAtom";

const usePPT = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);

  const onChangeSelectFileName = (event: any): void =>
    setSubmit((prev) => ({ ...prev, ppt: event.target.files[0] }));

  return { onChangeSelectFileName };
};

export default usePPT;
