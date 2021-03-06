type HeaderItemProps = {
  title: string;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};

const HeaderItem = ({ title, Icon }: HeaderItemProps) => (
  <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
    <Icon className="h-8 mb-1 group-hover:animate-bounce" />
    <p className="tracking-widest uppercase opacity-0 group-hover:opacity-100">
      {title}
    </p>
  </div>
);

export default HeaderItem;
