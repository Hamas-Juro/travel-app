export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items in your packing List. 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, ✈️ ready to fly!"
          : `🧳 You have ${numItems} amount of items in your list. You have already
          packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
