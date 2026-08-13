"use client";

import * as React from "react";

interface UseCertificateDialogOptions {
  open: boolean;
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  dialogRef: React.RefObject<HTMLElement | null>;
}

export function useCertificateDialog({
  open,
  onClose,
  closeButtonRef,
  dialogRef,
}: UseCertificateDialogOptions) {
  const previousActiveElementRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;

    /*
     * Prevent the document behind the dialog from scrolling.
     *
     * scrollbar-gutter keeps the layout from jumping on desktop
     * browsers when the scrollbar disappears.
     */
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);

      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;

      previousActiveElementRef.current?.focus();
    };
  }, [open, closeButtonRef]);

  /*
   * Escape closes the dialog.
   */
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /*
   * Prevent wheel scrolling outside the dialog.
   *
   * The actual course list has its own scroll container,
   * so it continues to scroll normally.
   */
  React.useEffect(() => {
    if (!open) return;

    const handleWheel = (event: WheelEvent) => {
      const dialog = dialogRef.current;

      if (!dialog) return;

      if (!dialog.contains(event.target as Node)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [open, dialogRef]);
}
