import { useImperativeHandle } from "react";
import { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";


const Modal = forwardRef(function Modal({ children,buttoncaption }, ref) {
   const dialog = useRef();

   useImperativeHandle(ref, () => {
      return {
         open() {
            dialog.current.showModal();
         }
      }
   })
   return createPortal(
      <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md"
      >{children}
         <form method="dialog" className="mt-3 text-end">
             <button className="bg-stone-800 px-6 py-2 text-slate-50 rounded-md hover:bg-stone-950">{buttoncaption}</button>
         </form>
      </dialog>, document.getElementById('modal-root'))
})

export default Modal;