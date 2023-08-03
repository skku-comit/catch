//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/button/start-button.png";

// components
import QuestionContainer from "../components/layout/QuestionContainer";
import ImageContainer from "../components/layout/ImageContainer";

const Question1Page = () => {
  return (
    <div className={classes["page"]}>
      <ImageContainer />

      <QuestionContainer
        Number={1}
        Problem={
          "안녕 캐치, 난 유투브 편집자야.\n어떤 자막을 사용해야 구독자들이\n더 편하게 볼 수 있을까?"
        }
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default Question1Page;
