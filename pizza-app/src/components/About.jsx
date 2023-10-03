import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <a href="#about"><h2  className="text-2xl font-medium">Grab a Slice!</h2></a><br/>
                    <p className="text-lg">Welcome to Morehouse Pizza Shack's official website!</p>
<p className="text-lg">Discover the taste of perfection with Morehouse Pizza Shack's freshly crafted pizzas.</p>
<p className="text-lg">Serving you with passion and flavor, we bring the best of pizza right to your doorstep.</p>
<p className="text-lg">Our homepage is your gateway to a delightful pizza experience:</p>
<br/>
<ul>
  <li><p className="text-lg font-bold">Location: 1234 Morehouse Street, Atlanta, GA.</p></li>
  <li><p className="text-lg font-bold">Hours: 11:00 AM to 10:00 PM, Monday to Saturday.</p></li>
</ul>
<br/>
<p className="text-lg"> Whether you're a valued customer or a dedicated staff member, this website is your hub for all things Morehouse Pizza Shack.</p>
<p className="text-lg">Immerse yourself in the world of mouthwatering pizzas, all wrapped in the official Morehouse colors.</p>
<p className="text-lg">Stay connected, stay satisfied - Morehouse Pizza Shack is just a click away.</p>

                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}