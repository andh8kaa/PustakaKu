type Props = { tersedia: number; total: number; long?: boolean };

export default function StokBadge({ tersedia, total, long }: Props) {
  const habis = tersedia === 0;
  return (
    <span className={`badge ${habis ? "badge-red" : "badge-green"}`}>
      {long ? `${tersedia} dari ${total} tersedia` : `${tersedia}/${total}`}
    </span>
  );
}
