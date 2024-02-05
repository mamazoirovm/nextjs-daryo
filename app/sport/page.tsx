import "../news/news.css";
export default function News() {
  return (
    <>
      <div>
        <h2 className="titles">
          WBA reytingi yangilandi. 4 nafar o‘zbekistonlik bokschi o‘z vazn
          toifasida yetakchi
        </h2>
        <span>
          BUGUN <b>18:12</b>
        </span>
        <p className="test">
          Butunjahon boks assotsiatsiyasi (WBA) yanvar oyi yakunlariga ko‘ra
          yangilangan reytingni e’lon qildi.
        </p>
        <img
          style={{ width: 709, height: 492 }}
          src="https://daryo.uz/static/2024/02/05/photo_2023-11-04_12-18-43-OXBw1DEk.jpg"
          alt=""
        />
        <p className="test">
          Ushbu reytingda 4 nafar o‘zbekistonlik bokschi 1-o‘rinni egalladi.
          Umumiy esa 7 nafar o‘zbekistonlik bokschi o‘rin olgan. Hasanboy
          Do‘stmatov (minimal vazn) — 2-o‘rin; Murodjon Ahmadaliyev (birinchi
          yarim yengil vazn) — 1-o‘rin; Otabek Xolmatov (yarim yengil vazn) —
          1-o‘rin; Botir Ahmedov (super yengil vazn) — 8-o‘rin; Shahram G‘iyosov
          (yarim o‘rta vazn) — 1-o‘rin; Isroil Madrimov (super yarim o‘rta vazn)
          — 1-o‘rin; Bektemir Meliqo‘ziyev (super o‘rta vazn) — 6-o‘rin.
        </p>
      </div>
    </>
  );
}
