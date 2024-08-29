const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white ">
        <span className="text-orange-400 font-semibold text-2xl md:block hidden">
          Logo
        </span>
        <span className="text-orange-400 font-semibold text-2xl md:block block">
          L.
        </span>
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-5 px-3 relative">
        {navLinks.map((link) => {})}
      </div>
    </div>
  );
};

export default Sidebar;
