import React from "react";
import { X, Mail, Bell, Clock } from "lucide-react";

const InboxDialog = ({ isOpen, onClose, items, setItems }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center bg-bg/60 font-gortesk">

      {/* Container */}
      <div className="w-full md:max-w-xl bg-white shadow-md border border-gray-300 font-sans" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-bg-soft">
          <div className="flex items-center gap-2 text-bg">
            <Bell size={18} />
            <span className="text-base font-bold">INBOX</span>
          </div>
          <X
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={onClose}
            size={22}
          />
        </div>

        {/* Body */}
        <div className="p-4">
          {items.length === 0 ? (
            <div className="py-6 text-center text-gray-500">
              <Mail className="mx-auto w-6 h-6 mb-2" />
              <span>Aucun message</span>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 border border-gray-200">
              {items.map((it) => (
                <div key={it.id} className="p-3 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">{it.title}</div>
                    <div className="text-xs text-gray-500">{it.time}</div>
                    <div className="mt-1 text-sm text-gray-600">{it.excerpt}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-300">
          <button className="px-4 py-1.5 text-sm font-medium border border-gray-400 bg-gray-100 hover:bg-gray-200" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxDialog;
