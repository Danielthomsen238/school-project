import Navbar from "../components/Navbar";
import Image from "next/image";
import img1 from "../src/images/img1.png"
const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <>
      <Navbar />
      <Image src={img1} alt="data-image" width={900} height={500} layout="responsive" />
      <article>
      <h1>Lorem ipsum dolor</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum felis ornare tellus molestie, pharetra varius lorem semper. Nulla ut felis orci. Etiam at arcu tempus, semper urna eget, ultrices magna. Proin quis risus eget risus rutrum hendrerit. Vestibulum id facilisis mi, at dictum nulla. Vivamus sed mattis lectus. Mauris fermentum, arcu nec consequat ultrices, mauris ante consequat tortor, et ornare massa metus quis eros. Donec ornare maximus vulputate. Praesent posuere ligula vitae augue tristique tincidunt sed eu nisi. Aliquam sed velit tincidunt, molestie ex et, ullamcorper nisi. Etiam quis efficitur erat, ac convallis ligula. Sed vitae dui nulla. Aliquam rhoncus libero sed lacus lacinia malesuada.</p>
      <p>Curabitur laoreet tempor erat, a elementum felis condimentum condimentum. Maecenas eleifend velit a interdum mattis. Phasellus nulla nisi, interdum et nibh nec, viverra pellentesque sem. Nunc lacinia tincidunt suscipit. Phasellus id augue enim. Curabitur venenatis, nisi a egestas pharetra, urna dui eleifend nunc, a tempor erat diam nec erat. Morbi congue vestibulum nibh non tincidunt. Sed felis risus, tempus ut auctor id, tincidunt et risus. Fusce vel mi tincidunt libero lobortis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae neque et leo porta consectetur id eget eros. Sed scelerisque nunc placerat, maximus metus eu, iaculis tortor. Vestibulum justo lorem, varius id aliquam id, egestas eget erat. Donec risus sem, porttitor a scelerisque eget, fringilla et est.</p>
      </article>
    </>
  );
}

export default Index;
