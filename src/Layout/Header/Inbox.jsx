import React from "react";
import { X, Inbox, Mail, Bell, Trash2, Check, Clock } from "lucide-react";

// Cloned inbox dialog component based on AboutDialog open/close logic

const InboxDialog = ({ isOpen, onClose, items, setItems }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  function markRead(id) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, unread: false } : it)));
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function markAllRead() {
    setItems((prev) => prev.map((it) => ({ ...it, unread: false })));
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm select-none"
    >
      {/* Container */}
      <div
        className="w-full md:max-w-2xl bg-white shadow-xl rounded-2xl font-ibm animate-slideup overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-indigo-600" />
            <div>
              <h3 className="text-lg hidden md:inline-block md:text-xl font-bold text-gray-900">Boîte d'info de la bibliothèque</h3>
              <p className="text-sm hidden md:inline-block text-gray-500">Dernières actualités et événements de l'université</p>
            </div>
          </div>

          <X className="cursor-pointer p-1 rounded-full hover:bg-gray-100" onClick={onClose} size={28} />
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Messages récents</span>
            <span className="text-sm text-gray-400">{items.length} total</span>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-gray-200 rounded-lg">
            {items.length === 0 && (
              <div className="p-6 text-center text-gray-400">
                <Mail className="mx-auto w-8 h-8 mb-3" />
                <span>Aucun élément pour le moment</span>
              </div>
            )}

            {items.map((it) => (
              <div key={it.id} className="flex items-start gap-4 px-4 py-3 hover:bg-gray-50">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center ${it.unread ? "bg-indigo-600" : "bg-gray-300"}`}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className={`font-semibold ${it.unread ? "text-gray-900" : "text-gray-700"}`}>{it.title}</div>
                      <div className="text-xs text-gray-400">{it.time}</div>
                    </div>
                    <span className="inline-flex items-center text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">{it.type}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 truncate">{it.excerpt}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-center p-6 border-t border-gray-200">
            <button
              className="cursor-pointer font-poppins font-bold px-6 py-2 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxDialog;