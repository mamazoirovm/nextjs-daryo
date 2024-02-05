import Link from "next/link";
import "./pages.css";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="text">so'nggi yangiliklar</h1>
          </div>
          <div className="content">
            <Link href={"/news"} className="card">
              <img
                style={{ width: 328, height: 217 }}
                src="https://daryo.uz/static/2024/02/05/gettyimages-1686729170-1024x1024-uGzoo68R.jpg"
                alt=""
              />
              <h2 className="title">
                “Kalyari” Eldor Shomurodovni “Salernitana”ga qo‘yib yubormadi
              </h2>
              <span>
                BUGUN <b>18:12</b>
              </span>
              <p className="para">
                O‘zbekistonlik futbolchi klubini almashtirishga yaqin kelgandi
              </p>
            </Link>
            <Link href={"/sport"} className="card">
              <img
                style={{ width: 328, height: 217 }}
                src="https://daryo.uz/static/2024/02/05/photo_2023-11-04_12-18-43-OXBw1DEk.jpg"
                alt=""
              />
              <h2 className="title">
                WBA reytingi yangilandi. 4 nafar o‘zbekistonlik bokschi o‘z vazn
                toifasida yetakchi
              </h2>
              <span>
                BUGUN <b>14:12</b>
              </span>
              <p className="para">
                Butunjahon boks assotsiatsiyasi yanvar oyi yakunlariga ko‘ra
                yangilangan reytingni e’lon qildi
              </p>
            </Link>
            <Link href={"/samsung"} className="card">
              <img
                style={{ width: 328, height: 217 }}
                src="https://daryo.uz/static/2024/02/05/sam896-vGbbT4Oo.jpg"
                alt=""
              />
              <h2 className="title">
                Samsung kompaniyasining rahbari firibgarlik ishi bo‘yicha sudda
                to‘liq oqlandi
              </h2>
              <span>
                BUGUN <b>19:52</b>
              </span>
              <p className="para">
                Sudya mazkur ishda bir qator nomuvofiqliklar borligini,
                jumladan, Chje Li aksiyadorlarni chalg‘ituvchi ma’lumotlar
                berganini tasdiqlovchi dalillarning...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
