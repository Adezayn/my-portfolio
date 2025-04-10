type Props = {
    children: React.ReactNode,
    className?: string
}

const Container = ({children}: Props) => {
  return (
    <div className='mx-auto max-w-[1200px] px-6 '>
      {children}
    </div>
  );
}

export default Container