import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Mail, Calendar, Shield } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    navigate('/signin');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back to your account</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              disabled={loading}
              className="btn-secondary flex items-center gap-2 disabled:opacity-50"
            >
              <LogOut className="w-5 h-5" />
              {loading ? 'Logging out...' : 'Logout'}
            </motion.button>
          </div>
        </motion.div>

        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <User className="w-10 h-10 text-primary-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h2>
            <p className="text-gray-600">Authenticated User</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <h3 className="font-semibold text-gray-900">Email Address</h3>
              </div>
              <p className="text-gray-700">{user?.email}</p>
            </motion.div>

            {/* Account Created */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-primary-600" />
                <h3 className="font-semibold text-gray-900">Account Created</h3>
              </div>
              <p className="text-gray-700">{formatDate(user?.createdAt)}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Security Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">Security Status</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Password Secured</span>
              </div>
              <span className="text-sm text-green-600">✓ Protected with bcrypt</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">JWT Authentication</span>
              </div>
              <span className="text-sm text-green-600">✓ HttpOnly Cookie</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Session Active</span>
              </div>
              <span className="text-sm text-green-600">✓ Valid Token</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 