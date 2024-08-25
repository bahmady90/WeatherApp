
export default function TableElement({children, padding}) {
  return (
    <div className={`px-${padding} py-4 min-w-10`}>{children}</div>
  )
}
