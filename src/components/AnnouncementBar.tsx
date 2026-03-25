const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 text-center">
      <p className="text-xs font-medium tracking-[0.15em] uppercase">
        Free Shipping on Orders Over $75 · Use Code{" "}
        <span className="text-gold-light font-semibold">GLOW20</span> for 20% Off
      </p>
    </div>
  );
};

export default AnnouncementBar;
