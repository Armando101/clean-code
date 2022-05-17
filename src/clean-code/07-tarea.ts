(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  class InputElement {
    htmlElement: HtmlElement;
    inputAttributes: InputAttributes;
    inputEvents: InputEvents;

    constructor(
      public value: string,
      public placeholder: string,
      public id: string
    ) {
      this.htmlElement = new HtmlElement(this.id, "input");
      this.inputAttributes = new InputAttributes(this.value, this.placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement("Armando", "Enter first name", "txtName");

  console.log({ nameField });
})();
