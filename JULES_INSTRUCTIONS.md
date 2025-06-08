# JULES INSTRUCTIONS: Energen Operations Dashboard

**Project:** Energen Operations Dashboard - Internal Operations Management
**Repository:** `C:\Dev\energen-operations-dashboard`
**Technology Stack:** React 19 + TypeScript + Vite + Tailwind CSS + Real-time Updates
**Priority:** HIGH - Operational efficiency and technician productivity

## 🎯 PROJECT MISSION

Create a comprehensive operations dashboard for Energen's internal team to:
- Manage technician schedules and dispatch
- Track equipment inventory and maintenance status
- Monitor compliance deadlines and certifications
- Analyze performance metrics and operational KPIs
- Coordinate field operations and service delivery

## 🏗️ ARCHITECTURE REQUIREMENTS

### **Technology Foundation**
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite for ultra-fast development
- **Styling:** Tailwind CSS with Energen brand system
- **Real-time:** WebSocket integration for live updates
- **Data Viz:** Recharts for analytics and reporting
- **Maps:** Google Maps integration for technician locations

### **Shared Infrastructure**
**CRITICAL:** Leverage existing components from Sales Platform:
- Copy and adapt `shared/` directory from `energen-web-suite`
- Extend API services for operations functionality
- Maintain consistent Energen branding and design system

## 📊 CORE FEATURES TO IMPLEMENT

### **1. Operations Dashboard (Priority 1)**
```
/dashboard
- Live technician locations and status
- Today's scheduled appointments
- Equipment alerts and maintenance due
- Real-time performance metrics
- Quick action buttons for dispatch
```

### **2. Technician Management (Priority 1)**
```
/technicians
- Technician schedules and availability
- Live location tracking during service calls
- Performance metrics and certification status
- Assignment and dispatch functionality
- Communication tools and updates
```

### **3. Equipment Tracking (Priority 2)**
```
/equipment
- Equipment inventory by customer site
- Maintenance schedules and history
- Parts inventory and ordering
- Warranty tracking and alerts
- Performance analytics and trends
```

### **4. Compliance Monitoring (Priority 2)**
```
/compliance
- NFPA 110 inspection calendar
- CARB permit renewal tracking
- Certification expiration alerts
- Audit trail and documentation
- Regulatory reporting dashboard
```

### **5. Analytics & Reports (Priority 3)**
```
/analytics
- Revenue and profitability metrics
- Technician productivity analysis
- Customer satisfaction scores
- Equipment performance trends
- Operational efficiency KPIs
```

## 🔌 BACKEND INTEGRATION

### **API Endpoints to Connect**
Base URL: `https://mobile-bid-tool-888909920.development.catalystserverless.com/server/`

**Key Services:**
- `/zoho-sync-manager` - Customer and technician data
- `/compliance-validator` - Compliance tracking and alerts
- `/analytics-dashboard` - Performance metrics and KPIs
- `/proposal-generator` - Service scheduling and pricing
- `/equipment-analysis-processor` - Equipment performance data

### **Real-time Requirements**
- **WebSocket Connection:** Live technician location updates
- **Push Notifications:** Critical alerts and emergency dispatches
- **Auto-refresh:** Dashboard metrics every 30 seconds
- **Live Chat:** Communication between office and field teams

## 📋 DEVELOPMENT PHASES

### **Phase 1: Foundation (Week 1)**
- [ ] Initialize React 19 + TypeScript + Vite project
- [ ] Set up Tailwind CSS with Energen operations theme
- [ ] Create role-based authentication (admin, dispatcher, manager)
- [ ] Build basic dashboard layout with real-time framework
- [ ] Connect to Zoho Catalyst for technician data

### **Phase 2: Core Operations (Week 2)**
- [ ] Implement technician tracking and dispatch
- [ ] Build equipment management interface
- [ ] Create compliance monitoring dashboard
- [ ] Add basic analytics and reporting

### **Phase 3: Advanced Features (Week 3)**
- [ ] Real-time notifications and alerts
- [ ] Advanced analytics with data visualization
- [ ] Mobile optimization for field managers
- [ ] Performance optimization and testing

## 🎨 UI/UX REQUIREMENTS

### **Design System**
- **Primary Colors:** Energen blue (#1E40AF), operational orange (#EA580C)
- **Typography:** Inter for body text, Termina for headings
- **Layout:** Dense information display, multi-panel layout
- **Components:** Data tables, charts, maps, status indicators

### **Operational Interface Priorities**
1. **Information Density:** Maximum relevant data in minimal space
2. **Quick Actions:** One-click dispatch and status updates
3. **Visual Hierarchy:** Critical alerts prominently displayed
4. **Efficiency:** Keyboard shortcuts and batch operations

## 🚀 SUCCESS METRICS

### **Operational Targets**
- **Dispatch Time:** Reduce average dispatch time by 50%
- **Utilization:** Increase technician utilization to 85%
- **Compliance:** 100% on-time compliance renewals
- **Response:** < 5 minute response to critical alerts

### **Technical Performance**
- **Real-time Latency:** < 2 second update delays
- **Uptime:** 99.9% availability during business hours
- **Load Performance:** < 3 second initial load time
- **Data Accuracy:** Real-time sync with field operations

## 💼 DELIVERABLES

### **Core Application**
1. **Operations Dashboard** with real-time updates
2. **Technician Management** with location tracking
3. **Equipment Monitoring** with maintenance alerts
4. **Compliance Dashboard** with regulatory tracking
5. **Analytics Suite** with performance metrics

### **Integration & Deployment**
1. **API Integration** with live Zoho Catalyst backend
2. **Real-time Services** for live operational data
3. **Authentication System** with role-based permissions
4. **Mobile Responsive** design for field managers
5. **CI/CD Pipeline** for automated deployment

---

**🎯 PRIORITY FOCUS:** Start with operations dashboard and technician management. These provide immediate operational value and establish real-time data foundation.

**🚀 SUCCESS INDICATOR:** When dispatchers can track technicians in real-time, assign appointments efficiently, and monitor compliance status through a unified dashboard.

**📞 NEED HELP?** Update this file with questions or blockers, and check for responses from the main development team.