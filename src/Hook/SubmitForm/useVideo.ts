import { useRecoilState } from "recoil";
import { SubmitData } from "../../Store/SubmitAtom";

const useVideo = () => {
  const [submit, setSubmit] = useRecoilState(SubmitData);

  const onChangeSelectVideoName = (event: any): void =>
    setSubmit((prev) => ({ ...prev, video: event.target.files[0] }));

  return { onChangeSelectVideoName };
};

export default useVideo;
