

import Image from "next/image";
import Link from "next/link";
import "../style/home.css";

export default function Home() {
  return (
    <div>
      <div className="text-right px-4 py-2 space-x-4">
        <h5>Sign up / Log in</h5>
        <h5>Customer Care</h5>
      </div>

      <header>
        <div className="flex justify-center items-center py-4">
         
          <h1 id="ved" className="text-3xl font-bold">Amazon Latest Fashion Sale</h1>        
       </div>

      </header>

      <div className="container">
        {[
          {
            title: "Men",
            items: ["Shirt", "T-shirt", "Kurta", "Jeans", "Pants", "Undergarment"],
          },
          {
            title: "Women",
            items: ["Tops", "Kurti", "Jeans", "Leggins", "Saree", "Undergarment"],
          },
          {
            title: "Kids",
            items: ["Shirt", "T-shirt", "Shoes", "Jeans", "Undergarments"],
          },
        ].map((section, idx) => (
          <div className="section" key={idx}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>
                  <Link href="https://www.ajio.com/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="section_1">
          <Image align="center" src="/Dress_1.jpg" alt="Dress 1" width={300} height={400} />
          <h5 align="center">Tom And Jerry: Thinking Tom</h5>
          <p align="center">Price = 499/-</p>
        </div>

        <div className="section_2">
          <Image src="/Dress_2.jpeg" alt="Dress 2" width={300} height={400} />
          <h5 align="center">
            PRSIZHE Black Hoodie with Grey Detail – Casual & Stylish
          </h5>
          <p align="center">Price = 799/-</p>
        </div>

        <div className="section_1">
          <Image src="/Dress_3.jpeg" alt="Dress 3" width={300} height={400} />
          <h5 align="center">Demon Slayer: Kimetsu no Yaiba Tanjiro</h5>
          <p align="center">Price = 399/-</p>
        </div>
      </div>

      <footer className="text-center mt-10">
        <Link href="https://www.ajio.com/">
          <h3>More About Us</h3>
        </Link>
      </footer>
    </div>
  );
}
