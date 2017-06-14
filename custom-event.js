function customEv() {
  let ev = {};

  let newEvent = () => {
    return {
      handlers: []
    }
  };

  /**
   * Emite un evento, si no se encuentra el evento en el objeto ev se crea
   * @param name {String} Nombre del evento
   * @param arrayOfArgs {Array} Array de argumentos que se pasarán a los manejadores
   */
  let emit = (name, arrayOfArgs) => {
    if (!ev[name]) addEvent(name);

    ev[name].forEach(handler => {
      handler(...arrayOfArgs);
    });
  };

  let addEvent = (name) => {
    ev[name] = newEvent();
  };

  let removeEvent = (name) => {
    delete ev[name];
  };

  /**
   * Añade un manejador para el evento
   * @param name {String} Nombre del evento al que queremos añadir un manejador
   * @param handler {Function} Definición de función a la que se llamará cuando se lance un evento
   */
  let on = (name, handler) => {
    ev[name].handlers = ev[name].handlers.concat(handler);
  };

  return {
    emit, addEvent, removeEvent, on
  };
}

export default customEv;