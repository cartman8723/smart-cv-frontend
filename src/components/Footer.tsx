function Footer() {
  return (
    <footer className="bg-light border-top text-center py-3 mt-auto w-100">
      <p className="mb-0 text-muted">
        © {new Date().getFullYear()} <span className="fw-bold">SmartCV</span> · Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
