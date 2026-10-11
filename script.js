const platos = [
    { id: 1, nombre: "Salmorejo cordobés", descripcion: "Crema fría de tomate con huevo, jamón y aceite de oliva virgen extra.", precio: 7.5, categoria: "entrantes", imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80" },
    { id: 2, nombre: "Berenjenas con miel", descripcion: "Berenjenas crujientes acompañadas de miel de caña de Frigiliana.", precio: 8.0, categoria: "entrantes", imagen: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=800&q=80" },
    { id: 3, nombre: "Tabla andaluza", descripcion: "Selección de jamón, queso curado, aceitunas y regañás.", precio: 12.5, categoria: "entrantes", imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80" },
    { id: 4, nombre: "Costillar a la barbacoa", descripcion: "Costillar asado lentamente con salsa barbacoa casera y patatas.", precio: 18.9, categoria: "principales", imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
    { id: 5, nombre: "Pasta marinera", descripcion: "Pasta con marisco, tomate y hierbas aromáticas, inspirada en los sabores de la costa andaluza.", precio: 16.5, categoria: "principales", imagen: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=800&q=80" },
    { id: 6, nombre: "Pollo al ajillo", descripcion: "Pollo dorado con ajo, vino blanco, perejil y patatas caseras.", precio: 14.9, categoria: "principales", imagen: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80" },
    { id: 7, nombre: "Torrija con canela", descripcion: "Pan brioche empapado en leche, dorado y servido con azúcar y canela.", precio: 6.5, categoria: "postres", imagen: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80" },
    { id: 8, nombre: "Tarta de almendras", descripcion: "Tarta artesanal de almendra con un suave toque de limón.", precio: 6.0, categoria: "postres", imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" },
    { id: 9, nombre: "Helado de naranja", descripcion: "Helado cremoso elaborado con naranjas andaluzas y ralladura de cítricos.", precio: 5.5, categoria: "postres", imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80" },
    { id: 10, nombre: "Tinto de verano", descripcion: "Vino tinto con refresco de limón, hielo y una rodaja de naranja.", precio: 4.5, categoria: "bebidas", imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80" },
    { id: 11, nombre: "Zumo de naranja", descripcion: "Zumo recién exprimido con naranjas de cultivo andaluz.", precio: 3.5, categoria: "bebidas", imagen: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80" },
    { id: 12, nombre: "Limonada con hierbabuena", descripcion: "Limonada casera muy fría con hojas frescas de hierbabuena.", precio: 3.9, categoria: "bebidas", imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80" }
];

const nombresCategorias = {
    entrantes: "Entrante",
    principales: "Plato principal",
    postres: "Postre",
    bebidas: "Bebida"
};

const listaPlatos = document.getElementById("lista-platos");
const listaDestacados = document.getElementById("lista-destacados");
const resultadoFiltro = document.getElementById("resultado-filtro");
const botonesFiltro = document.querySelectorAll("[data-categoria]");
const botonMenu = document.getElementById("boton-menu");
const botonNavegacion = document.getElementById("boton-navegacion");
const menuPrincipal = document.getElementById("menu-principal");
const contadorCarrito = document.getElementById("contador-carrito");
const enlacePedidos = document.getElementById("enlace-pedidos");
const resumenUnidades = document.getElementById("resumen-unidades");
const carritoVacio = document.getElementById("carrito-vacio");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const importeTotal = document.getElementById("importe-total");
const formularioPedido = document.getElementById("formulario-pedido");
const grupoDireccion = document.getElementById("grupo-direccion");
const direccionCliente = document.getElementById("direccion-cliente");
const mensajePedido = document.getElementById("mensaje-pedido");
const confirmacionPedido = document.getElementById("confirmacion-pedido");
const datosConfirmacion = document.getElementById("datos-confirmacion");
const productosConfirmacion = document.getElementById("productos-confirmacion");
const totalConfirmacion = document.getElementById("total-confirmacion");
const formularioReserva = document.getElementById("formulario-reserva");
const fechaReserva = document.getElementById("fecha-reserva");
const horaReserva = document.getElementById("hora-reserva");
const comensalesReserva = document.getElementById("comensales-reserva");
const mensajeReserva = document.getElementById("mensaje-reserva");
const zonaPlano = document.getElementById("zona-plano");
const datosConsulta = document.getElementById("datos-consulta");
const planoMesas = document.getElementById("plano-mesas");
const mensajeMesa = document.getElementById("mensaje-mesa");
const confirmarReserva = document.getElementById("confirmar-reserva");
const confirmacionReserva = document.getElementById("confirmacion-reserva");
const resumenReservaNombre = document.getElementById("reserva-resumen-nombre");
const resumenReservaFecha = document.getElementById("reserva-resumen-fecha");
const resumenReservaComensales = document.getElementById("reserva-resumen-comensales");
const resumenReservaMesa = document.getElementById("reserva-resumen-mesa");
const avisoValoracion = document.getElementById("aviso-valoracion");
const cerrarAvisoValoracion = document.getElementById("cerrar-aviso-valoracion");
const formularioResena = document.getElementById("formulario-resena");
const estrellasInputs = document.querySelectorAll(".estrella-input");
const estrellasLabels = document.querySelectorAll(".estrellas-interactivas label");
const textoPuntuacion = document.getElementById("texto-puntuacion");
const mensajeResena = document.getElementById("mensaje-resena");
const bloqueResenasGuardadas = document.getElementById("bloque-resenas-guardadas");
const listaResenasGuardadas = document.getElementById("lista-resenas-guardadas");
const mediaEstrellas = document.getElementById("media-estrellas");
const mediaValoraciones = document.getElementById("media-valoraciones");
const cantidadValoraciones = document.getElementById("cantidad-valoraciones");
const botonesFiltroAgenda = document.querySelectorAll("[data-tipo-agenda]");
const listaAgenda = document.getElementById("lista-agenda");
const resultadoAgenda = document.getElementById("resultado-agenda");
const fechaActualizacionAgendaElemento = document.getElementById("fecha-actualizacion-agenda");

let carrito = [];
let mesaSeleccionada = null;
let consultaReserva = null;
let reservasMemoria = [];
let resenasMemoria = [];

const claveReservas = "deliciasAndaluzasReservas";
const claveResenas = "deliciasAndaluzasResenas";
const claveCarrito = "deliciasAndaluzasCarrito";
const clavesDatosSimulados = [claveCarrito, claveReservas, claveResenas];
const mesas = [
    { id: 1, capacidad: 2 },
    { id: 2, capacidad: 2 },
    { id: 3, capacidad: 4 },
    { id: 4, capacidad: 4 },
    { id: 5, capacidad: 4 },
    { id: 6, capacidad: 6 },
    { id: 7, capacidad: 6 },
    { id: 8, capacidad: 8 }
];

const mesasOcupadasDeEjemplo = [2, 6];

const eventos = [
    {
        id: "evento-flamenco",
        tipo: "evento",
        titulo: "Noche de flamenco",
        descripcion: "Una velada de cante, guitarra y baile inspirada en los tablaos andaluces.",
        fecha: "2026-10-24",
        hora: "21:00",
        imagen: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1000&q=80",
        textoAlternativo: "Guitarrista durante una actuación de música en directo"
    },
    {
        id: "evento-musica",
        tipo: "evento",
        titulo: "Música en directo",
        descripcion: "Concierto acústico para acompañar la cena con versiones de música española.",
        fecha: "2026-11-07",
        hora: "20:30",
        imagen: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=80",
        textoAlternativo: "Músicos actuando sobre un escenario iluminado"
    },
    {
        id: "evento-jornada",
        tipo: "evento",
        titulo: "Jornada gastronómica andaluza",
        descripcion: "Demostraciones culinarias y degustación ficticia de recetas de distintas provincias.",
        fecha: "2026-09-20",
        hora: "13:00",
        imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
        textoAlternativo: "Cocinero preparando alimentos durante una demostración"
    }
];

const ofertas = [
    {
        id: "oferta-quince",
        tipo: "oferta",
        titulo: "15 % en entrantes seleccionados",
        descripcion: "Promoción ficticia para descubrir una selección de entrantes de nuestra carta.",
        condiciones: "Válida en una selección indicada por el restaurante. No acumulable a otras promociones.",
        fechaInicio: "2026-10-13",
        fechaFin: "2026-10-31",
        imagen: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=1000&q=80",
        textoAlternativo: "Entrante servido en una mesa de restaurante"
    },
    {
        id: "oferta-fin-semana",
        tipo: "oferta",
        titulo: "Menú especial de fin de semana",
        descripcion: "Menú ficticio compuesto por entrante, principal, postre y bebida.",
        condiciones: "Disponible sábados y domingos, sujeto a disponibilidad y con reserva previa.",
        fechaInicio: "2026-10-17",
        fechaFin: "2026-12-20",
        imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
        textoAlternativo: "Mesa preparada con varios platos de restaurante"
    },
    {
        id: "oferta-postres",
        tipo: "oferta",
        titulo: "Postre para compartir",
        descripcion: "Promoción ficticia de un postre de la casa para compartir entre dos personas.",
        condiciones: "Aplicable a comidas de dos menús completos. Una unidad por mesa.",
        fechaInicio: "2026-09-01",
        fechaFin: "2026-09-30",
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
        textoAlternativo: "Tarta preparada para servir como postre"
    }
];

const fechaActualizacionAgenda = "2026-10-11";

function formatearPrecio(precio) {
    return precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

function telefonoValido(telefono) {
    return telefono.replace(/\D/g, "").length >= 9;
}

function leerCarrito() {
    try {
        const datos = JSON.parse(localStorage.getItem(claveCarrito) || "[]");
        if (!Array.isArray(datos)) return [];
        return datos.filter((producto) =>
            Number.isInteger(producto.id) &&
            Number.isInteger(producto.cantidad) &&
            producto.cantidad > 0 &&
            platos.some((plato) => plato.id === producto.id)
        );
    } catch (error) {
        return [];
    }
}

function guardarCarrito() {
    try {
        localStorage.setItem(claveCarrito, JSON.stringify(carrito));
    } catch (error) {
        console.warn("No se pudo guardar el carrito en este navegador.");
    }
}

function crearTarjeta(plato) {
    return `
        <article class="tarjeta-plato">
            <img src="${plato.imagen}" alt="${plato.nombre}" loading="lazy">
            <div class="tarjeta-plato__contenido">
                <p class="tarjeta-plato__categoria">${nombresCategorias[plato.categoria]}</p>
                <h3>${plato.nombre}</h3>
                <p class="tarjeta-plato__descripcion">${plato.descripcion}</p>
                <div class="tarjeta-plato__pie">
                    <span class="precio">${formatearPrecio(plato.precio)}</span>
                    <button class="boton boton-carrito" type="button" data-id="${plato.id}">Añadir al carrito</button>
                </div>
            </div>
        </article>`;
}

function crearDestacado(plato) {
    return `
        <article class="destacado">
            <img src="${plato.imagen}" alt="${plato.nombre}" loading="lazy">
            <div class="destacado__contenido">
                <p>${nombresCategorias[plato.categoria]} · ${formatearPrecio(plato.precio)}</p>
                <h3>${plato.nombre}</h3>
            </div>
        </article>`;
}

function mostrarPlatos(categoria = "todos") {
    const platosFiltrados = categoria === "todos"
        ? platos
        : platos.filter((plato) => plato.categoria === categoria);

    listaPlatos.innerHTML = platosFiltrados.map(crearTarjeta).join("");
    resultadoFiltro.textContent = `${platosFiltrados.length} platos mostrados`;
}

function seleccionarFiltro(botonSeleccionado) {
    botonesFiltro.forEach((boton) => {
        const estaActivo = boton === botonSeleccionado;
        boton.classList.toggle("activo", estaActivo);
        boton.setAttribute("aria-pressed", estaActivo);
    });
}

function buscarPlato(id) {
    return platos.find((plato) => plato.id === id);
}

function calcularUnidades() {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
}

function calcularTotal() {
    return carrito.reduce((total, producto) => {
        const plato = buscarPlato(producto.id);
        return total + plato.precio * producto.cantidad;
    }, 0);
}

function crearProductoCarrito(producto) {
    const plato = buscarPlato(producto.id);
    const subtotal = plato.precio * producto.cantidad;

    return `
        <article class="producto-carrito">
            <img src="${plato.imagen}" alt="" loading="lazy">
            <div>
                <h4>${plato.nombre}</h4>
                <p class="producto-carrito__precio">${formatearPrecio(plato.precio)} por unidad</p>
            </div>
            <div class="controles-cantidad" aria-label="Cantidad de ${plato.nombre}">
                <button class="control-cantidad" type="button" data-accion="disminuir" data-id="${plato.id}" ${producto.cantidad === 1 ? "disabled" : ""} aria-label="Disminuir cantidad de ${plato.nombre}">−</button>
                <span class="cantidad-producto" aria-live="polite">${producto.cantidad}</span>
                <button class="control-cantidad" type="button" data-accion="aumentar" data-id="${plato.id}" aria-label="Aumentar cantidad de ${plato.nombre}">+</button>
            </div>
            <strong class="producto-carrito__subtotal">${formatearPrecio(subtotal)}</strong>
            <button class="eliminar-producto" type="button" data-accion="eliminar" data-id="${plato.id}">Eliminar</button>
        </article>`;
}

function ocultarConfirmacion() {
    if (confirmacionPedido) confirmacionPedido.hidden = true;
}

function actualizarCarrito() {
    const unidades = calcularUnidades();
    const estaVacio = carrito.length === 0;

    if (contadorCarrito) contadorCarrito.textContent = unidades;
    if (enlacePedidos) enlacePedidos.setAttribute("aria-label", `Pedidos, ${unidades} ${unidades === 1 ? "producto" : "productos"} en el carrito`);
    if (!listaCarrito) return;

    resumenUnidades.textContent = `${unidades} ${unidades === 1 ? "producto" : "productos"}`;
    carritoVacio.hidden = !estaVacio;
    totalCarrito.hidden = estaVacio;
    listaCarrito.innerHTML = carrito.map(crearProductoCarrito).join("");
    importeTotal.textContent = formatearPrecio(calcularTotal());
}

function añadirAlCarrito(id) {
    const productoExistente = carrito.find((producto) => producto.id === id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ id, cantidad: 1 });
    }

    mensajePedido.textContent = "";
    ocultarConfirmacion();
    guardarCarrito();
    actualizarCarrito();
}

function cambiarCantidad(id, cambio) {
    const producto = carrito.find((elemento) => elemento.id === id);
    if (!producto) return;

    producto.cantidad = Math.max(1, producto.cantidad + cambio);
    ocultarConfirmacion();
    guardarCarrito();
    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter((producto) => producto.id !== id);
    ocultarConfirmacion();
    guardarCarrito();
    actualizarCarrito();
}

function actualizarModalidad() {
    const modalidad = formularioPedido.elements.modalidad.value;
    const esDomicilio = modalidad === "domicilio";

    grupoDireccion.hidden = !esDomicilio;
    direccionCliente.disabled = !esDomicilio;
    direccionCliente.required = esDomicilio;
    if (!esDomicilio) direccionCliente.value = "";
}

function mostrarConfirmacion(datos, productos, total) {
    const modalidad = datos.get("modalidad");
    const textoModalidad = modalidad === "domicilio" ? "Entrega a domicilio" : "Recogida en el restaurante";
    const detalleDireccion = modalidad === "domicilio" ? ` Dirección: ${datos.get("direccion")}.` : "";

    datosConfirmacion.textContent = `${datos.get("nombre")} · ${datos.get("telefono")} · ${textoModalidad}.${detalleDireccion}`;
    productosConfirmacion.innerHTML = productos.map((producto) => {
        const plato = buscarPlato(producto.id);
        return `<li>${producto.cantidad} × ${plato.nombre} — ${formatearPrecio(plato.precio * producto.cantidad)}</li>`;
    }).join("");
    totalConfirmacion.textContent = formatearPrecio(total);
    confirmacionPedido.hidden = false;
    confirmacionPedido.focus();
}

function obtenerFechaHoy() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
}

function formatearFecha(fecha) {
    return new Date(`${fecha}T12:00:00`).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
    });
}

function leerReservas() {
    try {
        const datosGuardados = JSON.parse(localStorage.getItem(claveReservas) || "[]");
        if (!Array.isArray(datosGuardados)) return [];

        return datosGuardados
            .filter((reserva) =>
                typeof reserva.fecha === "string" &&
                typeof reserva.hora === "string" &&
                Number.isInteger(reserva.mesaId)
            )
            .map((reserva) => ({
                fecha: reserva.fecha,
                hora: reserva.hora,
                mesaId: reserva.mesaId
            }));
    } catch (error) {
        return reservasMemoria;
    }
}

function guardarReservas(reservas) {
    reservasMemoria = reservas;
    try {
        localStorage.setItem(claveReservas, JSON.stringify(reservas));
    } catch (error) {
        console.warn("No se pudo utilizar localStorage. La reserva solo durará durante esta sesión.");
    }
}

function mesaEstaOcupada(idMesa, fecha, hora) {
    const ocupadaComoEjemplo = mesasOcupadasDeEjemplo.includes(idMesa);
    const ocupadaPorReserva = leerReservas().some((reserva) =>
        reserva.mesaId === idMesa && reserva.fecha === fecha && reserva.hora === hora
    );
    return ocupadaComoEjemplo || ocupadaPorReserva;
}

function crearMesa(mesa, comensales, fecha, hora) {
    const ocupada = mesaEstaOcupada(mesa.id, fecha, hora);
    const capacidadSuficiente = mesa.capacidad >= comensales;
    const seleccionada = mesa.id === mesaSeleccionada;
    let estado = "Disponible";
    let claseEstado = "mesa--disponible";

    if (ocupada) {
        estado = "Ocupada";
        claseEstado = "mesa--ocupada";
    } else if (!capacidadSuficiente) {
        estado = "Capacidad insuficiente";
        claseEstado = "mesa--insuficiente";
    } else if (seleccionada) {
        estado = "Seleccionada";
        claseEstado = "mesa--seleccionada";
    }

    const deshabilitada = ocupada || !capacidadSuficiente;
    return `
        <button class="mesa ${claseEstado}" type="button" data-mesa-id="${mesa.id}"
                ${deshabilitada ? "disabled" : ""}
                aria-pressed="${seleccionada}"
                aria-label="Mesa ${mesa.id}, ${mesa.capacidad} personas, ${estado}">
            <strong>Mesa ${mesa.id}</strong>
            <span>${mesa.capacidad} personas</span>
            <small>${estado}</small>
        </button>`;
}

function mostrarPlano() {
    const comensales = Number(consultaReserva.comensales);
    planoMesas.innerHTML = mesas
        .map((mesa) => crearMesa(mesa, comensales, consultaReserva.fecha, consultaReserva.hora))
        .join("");
    datosConsulta.textContent = `${formatearFecha(consultaReserva.fecha)} · ${consultaReserva.hora} · ${comensales} ${comensales === 1 ? "persona" : "personas"}`;
}

function invalidarConsultaReserva() {
    if (zonaPlano.hidden) return;
    zonaPlano.hidden = true;
    mesaSeleccionada = null;
    consultaReserva = null;
    confirmarReserva.disabled = true;
    mensajeReserva.textContent = "Los datos han cambiado. Vuelve a consultar las mesas.";
}

function confirmarReservaSimulada() {
    if (!consultaReserva || mesaSeleccionada === null) {
        mensajeMesa.textContent = "Selecciona una mesa disponible antes de confirmar.";
        return;
    }

    if (mesaEstaOcupada(mesaSeleccionada, consultaReserva.fecha, consultaReserva.hora)) {
        mesaSeleccionada = null;
        confirmarReserva.disabled = true;
        mensajeMesa.textContent = "Esa mesa acaba de dejar de estar disponible. Elige otra.";
        mostrarPlano();
        return;
    }

    const mesa = mesas.find((elemento) => elemento.id === mesaSeleccionada);
    const nuevaReserva = {
        nombre: consultaReserva.nombre,
        telefono: consultaReserva.telefono,
        fecha: consultaReserva.fecha,
        hora: consultaReserva.hora,
        comensales: Number(consultaReserva.comensales),
        mesaId: mesa.id,
        capacidadMesa: mesa.capacidad
    };

    const reservas = leerReservas();
    reservas.push({
        fecha: nuevaReserva.fecha,
        hora: nuevaReserva.hora,
        mesaId: nuevaReserva.mesaId
    });
    guardarReservas(reservas);

    resumenReservaNombre.textContent = nuevaReserva.nombre;
    resumenReservaFecha.textContent = `${formatearFecha(nuevaReserva.fecha)} a las ${nuevaReserva.hora}`;
    resumenReservaComensales.textContent = `${nuevaReserva.comensales} ${nuevaReserva.comensales === 1 ? "persona" : "personas"}`;
    resumenReservaMesa.textContent = `Mesa ${mesa.id}, capacidad para ${mesa.capacidad}`;
    confirmacionReserva.hidden = false;
    zonaPlano.hidden = true;
    confirmacionReserva.focus();

    formularioReserva.reset();
    comensalesReserva.value = 2;
    mesaSeleccionada = null;
    consultaReserva = null;
    confirmarReserva.disabled = true;
}

function leerResenas() {
    try {
        const datosGuardados = JSON.parse(localStorage.getItem(claveResenas) || "[]");
        if (!Array.isArray(datosGuardados)) return [];

        return datosGuardados.filter((resena) =>
            typeof resena.nombre === "string" &&
            typeof resena.comentario === "string" &&
            Number.isInteger(resena.puntuacion) &&
            resena.puntuacion >= 1 &&
            resena.puntuacion <= 5
        );
    } catch (error) {
        return resenasMemoria;
    }
}

function guardarResenas(resenas) {
    resenasMemoria = resenas;
    try {
        localStorage.setItem(claveResenas, JSON.stringify(resenas));
    } catch (error) {
        console.warn("No se pudo utilizar localStorage. Las reseñas solo durarán durante esta sesión.");
    }
}

function reiniciarDatosDeliciasAndaluzas() {
    try {
        clavesDatosSimulados.forEach((clave) => localStorage.removeItem(clave));
    } catch (error) {
        return "No se pudieron borrar los datos: localStorage no está disponible.";
    }

    carrito = [];
    reservasMemoria = [];
    resenasMemoria = [];
    mesaSeleccionada = null;
    consultaReserva = null;

    actualizarCarrito();

    if (formularioPedido) {
        formularioPedido.reset();
        actualizarModalidad();
        mensajePedido.textContent = "";
        confirmacionPedido.hidden = true;
    }

    if (formularioReserva) {
        formularioReserva.reset();
        comensalesReserva.value = 2;
        fechaReserva.min = obtenerFechaHoy();
        mensajeReserva.textContent = "";
        zonaPlano.hidden = true;
        confirmacionReserva.hidden = true;
        confirmarReserva.disabled = true;
    }

    if (formularioResena) {
        formularioResena.reset();
        actualizarEstrellas(0);
        mensajeResena.textContent = "";
    }

    if (listaResenasGuardadas) mostrarResenas();

    return "Datos simulados de Delicias Andaluzas reiniciados: carrito, reservas y reseñas.";
}

function crearTarjetaResena(resena) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-resena";

    const estrellas = document.createElement("p");
    estrellas.className = "estrellas-lectura";
    estrellas.textContent = "★".repeat(resena.puntuacion) + "☆".repeat(5 - resena.puntuacion);
    estrellas.setAttribute("aria-label", `${resena.puntuacion} de 5 estrellas`);

    const comentario = document.createElement("blockquote");
    comentario.textContent = resena.comentario;

    const autor = document.createElement("p");
    autor.className = "autor-resena";
    autor.textContent = resena.nombre;

    const fecha = document.createElement("p");
    fecha.className = "fecha-resena";
    fecha.textContent = `Valoración simulada · ${resena.fecha}`;

    tarjeta.append(estrellas, comentario, autor, fecha);
    return tarjeta;
}

function calcularMediaResenas(resenas) {
    if (resenas.length === 0) return 0;
    const suma = resenas.reduce((total, resena) => total + resena.puntuacion, 0);
    return suma / resenas.length;
}

function mostrarResenas() {
    const resenas = leerResenas();
    listaResenasGuardadas.replaceChildren();
    bloqueResenasGuardadas.hidden = resenas.length === 0;

    [...resenas].reverse().forEach((resena) => {
        listaResenasGuardadas.append(crearTarjetaResena(resena));
    });

    if (resenas.length === 0) {
        mediaEstrellas.textContent = "☆☆☆☆☆";
        mediaValoraciones.textContent = "Sin valoraciones registradas";
        cantidadValoraciones.textContent = "Las opiniones de ejemplo no cuentan para la media.";
        return;
    }

    const media = calcularMediaResenas(resenas);
    const estrellasRedondeadas = Math.round(media);
    mediaEstrellas.textContent = "★".repeat(estrellasRedondeadas) + "☆".repeat(5 - estrellasRedondeadas);
    mediaValoraciones.textContent = `${media.toFixed(1).replace(".", ",")} de 5`;
    cantidadValoraciones.textContent = `${resenas.length} ${resenas.length === 1 ? "valoración simulada" : "valoraciones simuladas"}`;
}

function actualizarEstrellas(puntuacion) {
    estrellasLabels.forEach((estrella) => {
        estrella.classList.toggle("seleccionada", Number(estrella.dataset.valor) <= puntuacion);
    });
    textoPuntuacion.textContent = puntuacion
        ? `${puntuacion} ${puntuacion === 1 ? "estrella seleccionada" : "estrellas seleccionadas"}.`
        : "Selecciona entre 1 y 5 estrellas.";
}

function obtenerEstadoAgenda(item) {
    const hoy = obtenerFechaHoy();

    if (item.tipo === "evento") {
        return item.fecha < hoy
            ? { texto: "Finalizado", clase: "finalizado" }
            : { texto: "Próximo", clase: "proximo" };
    }

    if (hoy < item.fechaInicio) return { texto: "Próximamente", clase: "futuro" };
    if (hoy > item.fechaFin) return { texto: "Finalizada", clase: "finalizado" };
    return { texto: "Vigente", clase: "vigente" };
}

function añadirDatoAgenda(lista, nombre, valor) {
    const grupo = document.createElement("div");
    const termino = document.createElement("dt");
    const detalle = document.createElement("dd");
    termino.textContent = nombre;
    detalle.textContent = valor;
    grupo.append(termino, detalle);
    lista.append(grupo);
}

function crearTarjetaAgenda(item) {
    const estado = obtenerEstadoAgenda(item);
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-agenda";

    const imagen = document.createElement("img");
    imagen.className = "tarjeta-agenda__imagen";
    imagen.src = item.imagen;
    imagen.alt = item.textoAlternativo;
    imagen.loading = "lazy";

    const contenido = document.createElement("div");
    contenido.className = "tarjeta-agenda__contenido";

    const cabecera = document.createElement("div");
    cabecera.className = "tarjeta-agenda__cabecera";
    const tipo = document.createElement("span");
    tipo.className = "tipo-agenda";
    tipo.textContent = item.tipo === "evento" ? "Evento" : "Oferta";
    const estadoElemento = document.createElement("span");
    estadoElemento.className = `estado-agenda estado-agenda--${estado.clase}`;
    estadoElemento.textContent = estado.texto;
    cabecera.append(tipo, estadoElemento);

    const titulo = document.createElement("h3");
    titulo.textContent = item.titulo;
    const descripcion = document.createElement("p");
    descripcion.className = "tarjeta-agenda__descripcion";
    descripcion.textContent = item.descripcion;

    const datos = document.createElement("dl");
    datos.className = "datos-agenda";
    if (item.tipo === "evento") {
        añadirDatoAgenda(datos, "Fecha", formatearFecha(item.fecha));
        añadirDatoAgenda(datos, "Hora", item.hora);
    } else {
        añadirDatoAgenda(datos, "Validez", `${formatearFecha(item.fechaInicio)} – ${formatearFecha(item.fechaFin)}`);
        añadirDatoAgenda(datos, "Condiciones", item.condiciones);
    }

    const demostracion = document.createElement("p");
    demostracion.className = "demostracion-agenda";
    demostracion.textContent = `${item.tipo === "evento" ? "Evento" : "Promoción"} ficticio de demostración`;

    contenido.append(cabecera, titulo, descripcion, datos, demostracion);
    tarjeta.append(imagen, contenido);
    return tarjeta;
}

function mostrarAgenda(tipoSeleccionado = "todos") {
    const agendaCompleta = [...eventos, ...ofertas];
    const elementos = tipoSeleccionado === "todos"
        ? agendaCompleta
        : agendaCompleta.filter((item) => item.tipo === tipoSeleccionado);

    listaAgenda.replaceChildren();
    elementos.forEach((item) => listaAgenda.append(crearTarjetaAgenda(item)));
    resultadoAgenda.textContent = `${elementos.length} ${elementos.length === 1 ? "elemento mostrado" : "elementos mostrados"}`;
}

function seleccionarFiltroAgenda(botonSeleccionado) {
    botonesFiltroAgenda.forEach((boton) => {
        const activo = boton === botonSeleccionado;
        boton.classList.toggle("activo", activo);
        boton.setAttribute("aria-pressed", activo);
    });
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        seleccionarFiltro(boton);
        mostrarPlatos(boton.dataset.categoria);
    });
});

listaPlatos?.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".boton-carrito");
    if (!boton) return;

    añadirAlCarrito(Number(boton.dataset.id));
});

listaCarrito?.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button[data-accion]");
    if (!boton) return;

    const id = Number(boton.dataset.id);
    if (boton.dataset.accion === "aumentar") cambiarCantidad(id, 1);
    if (boton.dataset.accion === "disminuir") cambiarCantidad(id, -1);
    if (boton.dataset.accion === "eliminar") eliminarDelCarrito(id);
});

if (formularioPedido) {
    formularioPedido.elements.modalidad.forEach((opcion) => {
        opcion.addEventListener("change", actualizarModalidad);
    });
}

formularioPedido?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensajePedido.textContent = "";

    if (carrito.length === 0) {
        mensajePedido.textContent = "Añade al menos un producto antes de confirmar el pedido.";
        document.getElementById("carta").scrollIntoView();
        return;
    }

    if (!formularioPedido.checkValidity()) {
        mensajePedido.textContent = "Revisa los campos obligatorios antes de continuar.";
        formularioPedido.reportValidity();
        return;
    }

    const nombrePedido = formularioPedido.elements.nombre.value.trim();
    const telefonoPedido = formularioPedido.elements.telefono.value.trim();
    if (!nombrePedido) {
        mensajePedido.textContent = "Escribe un nombre y apellidos válidos.";
        formularioPedido.elements.nombre.focus();
        return;
    }
    if (!telefonoValido(telefonoPedido)) {
        mensajePedido.textContent = "El teléfono debe contener al menos 9 cifras.";
        formularioPedido.elements.telefono.focus();
        return;
    }

    const datos = new FormData(formularioPedido);
    datos.set("nombre", nombrePedido);
    datos.set("telefono", telefonoPedido);
    const productosConfirmados = carrito.map((producto) => ({ ...producto }));
    const totalConfirmado = calcularTotal();

    mostrarConfirmacion(datos, productosConfirmados, totalConfirmado);
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
    formularioPedido.reset();
    actualizarModalidad();
});

formularioReserva?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensajeReserva.textContent = "";
    confirmacionReserva.hidden = true;

    if (!formularioReserva.checkValidity()) {
        mensajeReserva.textContent = "Completa correctamente todos los campos obligatorios.";
        formularioReserva.reportValidity();
        return;
    }

    const nombreReserva = formularioReserva.elements.nombre.value.trim();
    const telefonoReserva = formularioReserva.elements.telefono.value.trim();
    if (!nombreReserva) {
        mensajeReserva.textContent = "Escribe un nombre y apellidos válidos.";
        formularioReserva.elements.nombre.focus();
        return;
    }
    if (!telefonoValido(telefonoReserva)) {
        mensajeReserva.textContent = "El teléfono debe contener al menos 9 cifras.";
        formularioReserva.elements.telefono.focus();
        return;
    }

    if (fechaReserva.value < obtenerFechaHoy()) {
        mensajeReserva.textContent = "La fecha de la reserva no puede ser anterior a hoy.";
        fechaReserva.focus();
        return;
    }

    const datos = new FormData(formularioReserva);
    datos.set("nombre", nombreReserva);
    datos.set("telefono", telefonoReserva);
    consultaReserva = Object.fromEntries(datos.entries());
    mesaSeleccionada = null;
    confirmarReserva.disabled = true;
    mensajeMesa.textContent = "Selecciona una mesa disponible con capacidad suficiente.";
    zonaPlano.hidden = false;
    mostrarPlano();
    zonaPlano.scrollIntoView({ behavior: "smooth", block: "start" });
});

planoMesas?.addEventListener("click", (evento) => {
    const botonMesa = evento.target.closest(".mesa:not(:disabled)");
    if (!botonMesa || !consultaReserva) return;

    mesaSeleccionada = Number(botonMesa.dataset.mesaId);
    const mesa = mesas.find((elemento) => elemento.id === mesaSeleccionada);
    mensajeMesa.textContent = `Has seleccionado la mesa ${mesa.id}, con capacidad para ${mesa.capacidad} personas.`;
    confirmarReserva.disabled = false;
    mostrarPlano();
});

formularioReserva?.addEventListener("input", invalidarConsultaReserva);

confirmarReserva?.addEventListener("click", confirmarReservaSimulada);

estrellasInputs.forEach((estrella) => {
    estrella.addEventListener("change", () => {
        actualizarEstrellas(Number(estrella.value));
        mensajeResena.textContent = "";
    });
});

formularioResena?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensajeResena.classList.remove("mensaje-resena--exito");
    mensajeResena.textContent = "";

    if (!formularioResena.checkValidity()) {
        mensajeResena.textContent = "Completa el nombre, la puntuación y un comentario válido.";
        formularioResena.reportValidity();
        return;
    }

    const datos = new FormData(formularioResena);
    const nombre = datos.get("nombre").trim();
    const comentario = datos.get("comentario").trim();
    const puntuacion = Number(datos.get("puntuacion"));

    if (!nombre || comentario.length < 10 || puntuacion < 1 || puntuacion > 5) {
        mensajeResena.textContent = "Revisa los datos: el comentario debe tener al menos 10 caracteres.";
        return;
    }

    const resenas = leerResenas();
    resenas.push({
        id: Date.now(),
        nombre,
        puntuacion,
        comentario,
        fecha: formatearFecha(obtenerFechaHoy())
    });
    guardarResenas(resenas);
    mostrarResenas();

    formularioResena.reset();
    actualizarEstrellas(0);
    mensajeResena.classList.add("mensaje-resena--exito");
    mensajeResena.textContent = "Valoración simulada guardada correctamente.";
});

cerrarAvisoValoracion?.addEventListener("click", () => {
    avisoValoracion.hidden = true;
});

botonesFiltroAgenda.forEach((boton) => {
    boton.addEventListener("click", () => {
        seleccionarFiltroAgenda(boton);
        mostrarAgenda(boton.dataset.tipoAgenda);
    });
});

botonMenu?.addEventListener("click", function() {
    document.getElementById("carta").scrollIntoView();
});

botonNavegacion?.addEventListener("click", () => {
    const menuEstaAbierto = menuPrincipal.classList.toggle("abierto");
    botonNavegacion.setAttribute("aria-expanded", menuEstaAbierto);
    botonNavegacion.setAttribute("aria-label", menuEstaAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    document.body.classList.toggle("menu-abierto", menuEstaAbierto);
});

document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape" || !menuPrincipal.classList.contains("abierto")) return;
    menuPrincipal.classList.remove("abierto");
    botonNavegacion.setAttribute("aria-expanded", "false");
    botonNavegacion.setAttribute("aria-label", "Abrir menú de navegación");
    document.body.classList.remove("menu-abierto");
    botonNavegacion.focus();
});

menuPrincipal?.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menuPrincipal.classList.remove("abierto");
        botonNavegacion.setAttribute("aria-expanded", "false");
        botonNavegacion.setAttribute("aria-label", "Abrir menú de navegación");
        document.body.classList.remove("menu-abierto");
    });
});

const platosDestacados = [platos[0], platos[4], platos[7]];
if (listaDestacados) listaDestacados.innerHTML = platosDestacados.map(crearDestacado).join("");
if (listaPlatos) mostrarPlatos();
carrito = leerCarrito();
if (formularioPedido) actualizarModalidad();
actualizarCarrito();
if (fechaReserva) fechaReserva.min = obtenerFechaHoy();
guardarReservas(leerReservas());
if (listaResenasGuardadas) mostrarResenas();
if (estrellasLabels.length) actualizarEstrellas(0);
if (listaAgenda) mostrarAgenda();

if (fechaActualizacionAgenda && fechaActualizacionAgendaElemento) {
    fechaActualizacionAgendaElemento.textContent = `Última actualización manual: ${formatearFecha(fechaActualizacionAgenda)}`;
    fechaActualizacionAgendaElemento.hidden = false;
}

// Uso exclusivo para desarrollo desde la consola:
// reiniciarDatosDeliciasAndaluzas()
if (typeof window !== "undefined") {
    window.reiniciarDatosDeliciasAndaluzas = reiniciarDatosDeliciasAndaluzas;
}
