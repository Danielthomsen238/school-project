import Navbar from "../components/Navbar";
import Image from "next/image";
import img1 from "../src/images/img1.png"
import img2 from "../src/images/img2.jpg"
const About = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <>
     <Navbar />
    <div className="container">
    <Image className="box1" src={img1} alt="data-image" width={900} height={500} layout="responsive" />
    <article className="box2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum felis ornare tellus molestie, pharetra varius lorem semper. Nulla ut felis orci. Etiam at arcu tempus, semper urna eget, ultrices magna. Proin quis risus eget risus rutrum hendrerit. Vestibulum id facilisis mi, at dictum nulla. Vivamus sed mattis lectus. Mauris fermentum, arcu nec consequat ultrices, mauris ante consequat tortor, et ornare massa metus quis eros. Donec ornare maximus vulputate. Praesent posuere ligula vitae augue tristique tincidunt sed eu nisi. Aliquam sed velit tincidunt, molestie ex et, ullamcorper nisi. Etiam quis efficitur erat, ac convallis ligula. Sed vitae dui nulla. Aliquam rhoncus libero sed lacus lacinia malesuada.</p>
    </article>
    <Image className="box3" src={img2} alt="data-image" width={900} height={500} layout="responsive" />
    <article className="box4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum felis ornare tellus molestie, pharetra varius lorem semper. Nulla ut felis orci. Etiam at arcu tempus, semper urna eget, ultrices magna. Proin quis risus eget risus rutrum hendrerit. Vestibulum id facilisis mi, at dictum nulla. Vivamus sed mattis lectus. Mauris fermentum, arcu nec consequat ultrices, mauris ante consequat tortor, et ornare massa metus quis eros. Donec ornare maximus vulputate. Praesent posuere ligula vitae augue tristique tincidunt sed eu nisi. Aliquam sed velit tincidunt, molestie ex et, ullamcorper nisi. Etiam quis efficitur erat, ac convallis ligula. Sed vitae dui nulla. Aliquam rhoncus libero sed lacus lacinia malesuada.</p>
    </article>
    </div>
    </>
  );
}

export default About