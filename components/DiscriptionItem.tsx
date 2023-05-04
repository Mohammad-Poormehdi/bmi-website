interface DescriptionItemProps {
  label: string;
  status: string;

}
const DescriptionItem: React.FC<DescriptionItemProps> = ({
  label,
  status,

}) => {
  return (
    <div className="flex gap-3 space-y-3 justify-end items-center">
      <p
        className={`mt-3 ${
            status === "کمبود وزن"
              ? "text-cyan-500 "
              : status === "نرمال"
              ? "text-green-500"
              : status === "اضافه وزن"
              ? "text-orange-500"
              : status === "چاقی"
              ? "text-red-500"
              : "text-red-800"
          }`}
      >
        {status}
      </p>
      <p className="">{label}</p>
      <div
        className={`w-5 h-5 rounded-full ${
          status === "کمبود وزن"
            ? "bg-cyan-500 "
            : status === "نرمال"
            ? "bg-green-500"
            : status === "اضافه وزن"
            ? "bg-orange-500"
            : status === "چاقی"
            ? "bg-red-500"
            : "bg-red-800"
        }`}
      ></div>
    </div>
  );
};
export default DescriptionItem;
