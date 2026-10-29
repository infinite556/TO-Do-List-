export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list 🚀 </em>
      </p>
    );
  const numItem = items.length;
  const numPac = items.filter((item) => item.packed).length;
  const precenteng = Math.round((numPac / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {precenteng === 100
          ? "you ready to Travel 🚁"
          : `
          you have ${numItem} item in your list ,and you already packed ${numPac} (
            ${precenteng}%)
            `}
      </em>
    </footer>
  );
}
