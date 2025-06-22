# System Architecture Diagram

Bu diyagram, AgentsPalace platformunun temel bileşenlerini ve aralarındaki ilişkileri gösterir.

## Platform Overview

```mermaid
flowchart TB
    subgraph "AgentsPalace Platform"
        subgraph "Frontend Layer"
            LP[Landing Page<br/>Next.js + TailwindCSS]
            DA[Dashboard<br/>React Admin Panel]
            API_UI[API Documentation<br/>Swagger UI]
        end
        
        subgraph "API Gateway Layer"
            AG[API Gateway<br/>Express.js / FastAPI]
            AUTH[Authentication<br/>JWT + OAuth]
            RATE[Rate Limiting<br/>Redis]
        end
        
        subgraph "Core Services"
            FLOW[AgentsFlow<br/>Workflow Engine]
            TASK[AgentsTask<br/>Task Management]
            OPS[AgentsOps<br/>Operations & Monitoring]
            MAP[AgentsMap<br/>Resource Mapping]
            BRAIN[AgentsBrain<br/>AI Decision Engine]
            CORE[AgentsCore<br/>Shared Utilities]
        end
        
        subgraph "Data Layer"
            PG[(PostgreSQL<br/>Primary Database)]
            REDIS[(Redis<br/>Cache & Sessions)]
            S3[(S3 Compatible<br/>File Storage)]
        end
        
        subgraph "Infrastructure"
            KAFKA[Kafka<br/>Message Bus]
            MONITOR[Monitoring<br/>Prometheus + Grafana]
            LOGS[Logging<br/>ELK Stack]
        end
    end
    
    subgraph "External Services"
        AI_API[AI Services<br/>OpenAI, Anthropic]
        NOTIF[Notifications<br/>Email, SMS, Slack]
        PAYMENT[Payment<br/>Stripe, PayPal]
    end
    
    %% Frontend connections
    LP --> AG
    DA --> AG
    API_UI --> AG
    
    %% API Gateway connections
    AG --> AUTH
    AG --> RATE
    AG --> KAFKA
    
    %% Service connections
    KAFKA --> FLOW
    KAFKA --> TASK
    KAFKA --> OPS
    KAFKA --> MAP
    KAFKA --> BRAIN
    
    %% Data connections
    FLOW --> PG
    TASK --> PG
    OPS --> PG
    MAP --> PG
    BRAIN --> PG
    CORE --> REDIS
    
    %% Monitoring connections
    FLOW --> MONITOR
    TASK --> MONITOR
    OPS --> MONITOR
    MAP --> MONITOR
    BRAIN --> MONITOR
    
    %% External service connections
    BRAIN --> AI_API
    OPS --> NOTIF
    AG --> PAYMENT
    
    %% Logging
    AG --> LOGS
    FLOW --> LOGS
    TASK --> LOGS
    OPS --> LOGS
```

## Component Responsibilities

### Frontend Layer
- **Landing Page**: Marketing site, lead generation
- **Dashboard**: Admin panel, monitoring, configuration
- **API Documentation**: Interactive API docs

### API Gateway Layer
- **API Gateway**: Request routing, load balancing
- **Authentication**: User management, JWT tokens
- **Rate Limiting**: API quota management

### Core Services
- **AgentsFlow**: Workflow definition and execution
- **AgentsTask**: Task scheduling and management
- **AgentsOps**: System operations and health monitoring
- **AgentsMap**: Resource and capability mapping
- **AgentsBrain**: AI-powered decision making
- **AgentsCore**: Shared libraries and utilities

### Data Layer
- **PostgreSQL**: Primary relational database
- **Redis**: Caching, session storage, pub/sub
- **S3 Storage**: File uploads, static assets

### Infrastructure
- **Kafka**: Event streaming, microservice communication
- **Monitoring**: Metrics collection and alerting
- **Logging**: Centralized log aggregation

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | Next.js 15, TailwindCSS, Framer Motion | Modern web interface |
| API | Express.js / FastAPI | RESTful API services |
| Messaging | Apache Kafka | Event-driven architecture |
| Database | PostgreSQL 15+ | Primary data storage |
| Cache | Redis 7+ | Session & data caching |
| Storage | MinIO / AWS S3 | File storage |
| Monitoring | Prometheus, Grafana | Metrics & dashboards |
| Logging | Elasticsearch, Logstash, Kibana | Log analysis |

## Data Flow

1. **User Request**: Frontend → API Gateway → Authentication
2. **Event Publishing**: API Gateway → Kafka → Core Services
3. **Data Processing**: Core Services → Database → Cache
4. **Response**: Core Services → Kafka → API Gateway → Frontend
5. **Monitoring**: All services → Prometheus → Grafana
6. **Logging**: All services → ELK Stack

## Scalability Considerations

- **Horizontal Scaling**: Kafka partitioning, service replicas
- **Load Balancing**: API Gateway with multiple instances
- **Database Scaling**: Read replicas, connection pooling
- **Cache Strategy**: Redis clustering, CDN integration
- **Monitoring**: Auto-scaling based on metrics

---

**Son Güncelleme:** 2025-01-22  
**Versiyonu:** v1.0  
**Sorumlu:** AgentsPalace Architecture Team
