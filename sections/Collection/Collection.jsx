import "./Collection.css"
import { SectionHeader, SectionWrapper,CollectionCard } from "../../components"
import { imgCollection,imgBanner } from "../../assets";
import { CardsCollection } from "..";
const Collection = () => {
  const articleParagraph = (
    <>
      <p>Welcome to our Online Clothing Shop, where style meets convenience! We pride ourselves on being your one-stop destination for all your fashion needs. 
      </p>
    </>
  );
  
  return (
    <div className="container">
      <SectionWrapper>
        <SectionHeader> Trending Collection </SectionHeader>
        <hr className="hr-text" data-content="Woman Exclusive" />
        <CollectionCard title="Begining of Journey" imgCard={imgCollection} text={articleParagraph}/>
        <div className="container py-4 " >
          <img  className="img-banner  " src={imgBanner} alt="Banner of Our Collection" />
          </div>
        <CardsCollection></CardsCollection>
    </SectionWrapper>
    </div>
  )
}

export default Collection
