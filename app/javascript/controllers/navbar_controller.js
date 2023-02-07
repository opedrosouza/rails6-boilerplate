import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = [ "mobileMenu", "openIcon", "closeIcon" ];

  connect() {}

  toggleMobileMenu() {
    this.mobileMenuTarget.classList.toggle("hidden");
    this.openIconTarget.classList.toggle("hidden");
    this.closeIconTarget.classList.toggle("hidden");
  }
}
