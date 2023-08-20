interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <>
      <div className="text-cyan-100 font-bold text-8xl ml-[400px] mt-[339px]">
        <div className="text-white font-semibold text-3xl mb-5">Hello, I'm</div>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    </>
  );
};

export default Header;
