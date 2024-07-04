import Image from "next/image";
import Link from "next/link";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const fetchSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch drink...');
  }
  return response.json();
}

const SingleDrinkPage = async ({ params }) => {
  const data = await fetchSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="capitalize btn btn-primary mt-8 mb-12"> Back to drinks</Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt=''
      />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}
export default SingleDrinkPage