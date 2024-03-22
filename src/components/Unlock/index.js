// Write your code here
import {useState} from "react";
import {
  MainContainer,
  CardContainer,
  ImageLock,
  Heading,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const[isLocked, setIsLocked] = useState(true)
  const changeIsLocked = () =>{
    setIsLocked(prevIsLocked =>!prevIsLocked);
  }
  const srcValue = isLocked?"https://assets.ccbp.in/frontend/hooks/lock-img.png":"https://assets.ccbp.in/frontend/hooks/unlock-img.png";
  const altValue = isLocked?"lock":"unlock";
  const headingText= isLocked?"Your Device is Locked":"Your Device is Unlocked";
  const buttonText = isLocked?"Unlock":"Lock";
  return (
    <MainContainer>
      <CardContainer>
        <ImageLock
          src={srcValue}
          alt={altValue}
        />
        <Heading>{headingText}</Heading>
        <CustomButton type="button" onClick={changeIsLocked}>{buttonText}</CustomButton>
      </CardContainer>
    </MainContainer>
  )
}
export default Unlock
