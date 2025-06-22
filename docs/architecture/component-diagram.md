# Component Diagram

AgentsPalace platformunun bileşen mimarisi ve sınıf yapıları.

## Frontend Components (React/Next.js)

```mermaid
classDiagram
    class App {
        +providers: Provider[]
        +routing: Router
        +render()
    }
    
    class LandingPage {
        +Hero: Component
        +Features: Component
        +CTA: Component
        +render()
    }
    
    class Dashboard {
        +WorkflowList: Component
        +TaskMonitor: Component
        +Analytics: Component
        +render()
    }
    
    class Hero {
        +title: string
        +subtitle: string
        +animations: FramerMotion
        +handleCTA()
    }
    
    class PlatformFeatures {
        +features: Feature[]
        +renderFeature(feature)
        +handleHover()
    }
    
    class ModuleGallery {
        +modules: Module[]
        +selectedModule: Module
        +onModuleSelect()
    }
    
    App --> LandingPage
    App --> Dashboard
    LandingPage --> Hero
    LandingPage --> PlatformFeatures  
    LandingPage --> ModuleGallery
```

## Backend Core Components

```mermaid
classDiagram
    class AgentsCore {
        <<interface>>
        +authenticate(token)
        +authorize(user, resource)
        +validateRequest(request)
        +handleError(error)
    }
    
    class ApiGateway {
        -routes: Route[]
        -middleware: Middleware[]
        +addRoute(route)
        +addMiddleware(middleware)
        +handleRequest(request)
        +proxyToService(service, request)
    }
    
    class AuthService {
        -jwtSecret: string
        -userRepository: UserRepository
        +login(credentials)
        +register(userData)
        +verifyToken(token)
        +refreshToken(token)
    }
    
    class DatabaseService {
        -connectionPool: Pool
        +query(sql, params)
        +transaction(operations)
        +migrate()
        +health()
    }
    
    class CacheService {
        -redisClient: RedisClient
        +get(key)
        +set(key, value, ttl)
        +delete(key)
        +exists(key)
    }
    
    AgentsCore <|-- ApiGateway
    AgentsCore <|-- AuthService
    AgentsCore <|-- DatabaseService
    AgentsCore <|-- CacheService
```

## AgentsFlow Components

```mermaid
classDiagram
    class AgentsFlow {
        -workflowEngine: WorkflowEngine
        -configParser: ConfigParser
        -eventLogger: EventLogger
        +executeWorkflow(workflowId)
        +pauseWorkflow(workflowId)
        +resumeWorkflow(workflowId)
        +getStatus(workflowId)
    }
    
    class WorkflowEngine {
        -runtime: Runtime
        -stepExecutor: StepExecutor
        +loadWorkflow(config)
        +executeStep(step)
        +handleError(error, context)
        +onSuccess(result)
    }
    
    class ConfigParser {
        +parseYAML(yamlConfig)
        +parseJSON(jsonConfig)
        +validateConfig(config)
        +transformConfig(config)
    }
    
    class StepExecutor {
        -agentPool: AgentPool
        +executeParallel(steps)
        +executeSequential(steps)
        +executeConditional(condition, steps)
        +timeout(duration)
    }
    
    class EventLogger {
        -kafkaProducer: KafkaProducer
        +logStart(workflowId)
        +logStep(stepId, result)
        +logError(error)
        +logComplete(workflowId, result)
    }
    
    AgentsFlow --> WorkflowEngine
    AgentsFlow --> ConfigParser
    AgentsFlow --> EventLogger
    WorkflowEngine --> StepExecutor
```

## AgentsTask Components

```mermaid
classDiagram
    class AgentsTask {
        -taskQueue: TaskQueue
        -scheduler: Scheduler
        -agentSelector: AgentSelector
        +createTask(taskData)
        +assignTask(taskId, agentId)
        +updateStatus(taskId, status)
        +getProgress(taskId)
    }
    
    class TaskQueue {
        -queue: Queue
        -priorityQueue: PriorityQueue
        +enqueue(task)
        +dequeue()
        +peek()
        +size()
    }
    
    class Scheduler {
        -cronJobs: CronJob[]
        -intervals: Interval[]
        +schedule(task, schedule)
        +cancel(taskId)
        +reschedule(taskId, newSchedule)
        +getScheduled()
    }
    
    class AgentSelector {
        -agents: Agent[]
        -capabilities: Map
        -loadBalancer: LoadBalancer
        +selectOptimalAgent(requirements)
        +checkAvailability(agentId)
        +updateCapabilities(agentId, capabilities)
    }
    
    class FeedbackLoop {
        -metricsCollector: MetricsCollector
        +collectFeedback(taskId, feedback)
        +analyzePerformance(agentId)
        +updateSelectionCriteria()
    }
    
    AgentsTask --> TaskQueue
    AgentsTask --> Scheduler
    AgentsTask --> AgentSelector
    AgentsTask --> FeedbackLoop
```

## AgentsOps Components

```mermaid
classDiagram
    class AgentsOps {
        -healthChecker: HealthChecker
        -metricsCollector: MetricsCollector
        -alertManager: AlertManager
        +monitorHealth()
        +collectMetrics()
        +handleAlert(alert)
        +generateReport()
    }
    
    class HealthChecker {
        -endpoints: Endpoint[]
        -checks: HealthCheck[]
        +checkService(serviceId)
        +checkDatabase()
        +checkCache()
        +getOverallHealth()
    }
    
    class MetricsCollector {
        -prometheus: PrometheusClient
        -gauges: Map
        -counters: Map
        +recordMetric(name, value)
        +incrementCounter(name)
        +observeHistogram(name, value)
    }
    
    class AlertManager {
        -rules: AlertRule[]
        -notificationChannels: Channel[]
        +evaluateRules()
        +sendAlert(alert, channel)
        +acknowledgeAlert(alertId)
        +resolveAlert(alertId)
    }
    
    class AutoScaler {
        -scalingPolicies: Policy[]
        +scaleUp(serviceId)
        +scaleDown(serviceId)
        +evaluateScaling()
        +updatePolicy(policy)
    }
    
    AgentsOps --> HealthChecker
    AgentsOps --> MetricsCollector
    AgentsOps --> AlertManager
    AgentsOps --> AutoScaler
```

## AgentsBrain Components

```mermaid
classDiagram
    class AgentsBrain {
        -decisionEngine: DecisionEngine
        -mlPipeline: MLPipeline
        -nlpProcessor: NLPProcessor
        +makeDecision(context)
        +learnFromFeedback(feedback)
        +processNaturalLanguage(text)
        +predictOutcome(scenario)
    }
    
    class DecisionEngine {
        -rules: Rule[]
        -models: MLModel[]
        -context: Context
        +applyRules(input)
        +predictWithModel(input)
        +combineDecisions(decisions)
        +explainDecision(decision)
    }
    
    class MLPipeline {
        -models: Model[]
        -preprocessors: Preprocessor[]
        -postprocessors: Postprocessor[]
        +trainModel(data)
        +predict(input)
        +evaluate(testData)
        +deployModel(model)
    }
    
    class NLPProcessor {
        -tokenizer: Tokenizer
        -parser: Parser
        -classifier: Classifier
        +tokenize(text)
        +extractEntities(text)
        +classifyIntent(text)
        +generateResponse(intent, entities)
    }
    
    class LearningEngine {
        -reinforcementLearner: RLAgent
        -feedbackProcessor: FeedbackProcessor
        +updateFromFeedback(feedback)
        +adaptBehavior(context)
        +optimizePerformance()
    }
    
    AgentsBrain --> DecisionEngine
    AgentsBrain --> MLPipeline
    AgentsBrain --> NLPProcessor
    AgentsBrain --> LearningEngine
```

## Data Models

```mermaid
classDiagram
    class User {
        +id: UUID
        +email: string
        +passwordHash: string
        +role: UserRole
        +createdAt: Date
        +lastLoginAt: Date
        +isActive: boolean
    }
    
    class Workflow {
        +id: UUID
        +name: string
        +description: string
        +config: WorkflowConfig
        +status: WorkflowStatus
        +createdBy: UUID
        +version: number
        +tags: string[]
    }
    
    class Task {
        +id: UUID
        +workflowId: UUID
        +agentId: string
        +type: TaskType
        +status: TaskStatus
        +priority: Priority
        +inputData: JSON
        +outputData: JSON
        +scheduledAt: Date
        +startedAt: Date
        +completedAt: Date
        +retryCount: number
    }
    
    class Agent {
        +id: string
        +name: string
        +type: AgentType
        +capabilities: Capability[]
        +status: AgentStatus
        +lastHeartbeat: Date
        +version: string
        +configuration: JSON
    }
    
    class Metric {
        +id: UUID
        +name: string
        +value: number
        +unit: string
        +timestamp: Date
        +tags: Map
        +source: string
    }
    
    User ||--o{ Workflow : creates
    Workflow ||--|{ Task : contains
    Task ||--o| Agent : assigned_to
    Agent ||--o{ Metric : generates
```

## Interface Definitions

```typescript
// Core interfaces
interface IWorkflowEngine {
  executeWorkflow(workflowId: string): Promise<WorkflowResult>;
  pauseWorkflow(workflowId: string): Promise<void>;
  resumeWorkflow(workflowId: string): Promise<void>;
  getStatus(workflowId: string): Promise<WorkflowStatus>;
}

interface ITaskManager {
  createTask(taskData: CreateTaskRequest): Promise<Task>;
  assignTask(taskId: string, agentId: string): Promise<void>;
  updateStatus(taskId: string, status: TaskStatus): Promise<void>;
  getProgress(taskId: string): Promise<TaskProgress>;
}

interface IAgentSelector {
  selectOptimalAgent(requirements: AgentRequirements): Promise<Agent>;
  checkAvailability(agentId: string): Promise<boolean>;
  updateCapabilities(agentId: string, capabilities: Capability[]): Promise<void>;
}

interface IDecisionEngine {
  makeDecision(context: DecisionContext): Promise<Decision>;
  learnFromFeedback(feedback: Feedback): Promise<void>;
  explainDecision(decision: Decision): Promise<Explanation>;
}
```

## Component Communication

```mermaid
flowchart LR
    subgraph "Frontend"
        UI[React Components]
    end
    
    subgraph "API Layer"
        GW[API Gateway]
        AUTH[Auth Service]
    end
    
    subgraph "Message Bus"
        KAFKA[Kafka]
    end
    
    subgraph "Core Services"
        FLOW[AgentsFlow]
        TASK[AgentsTask]
        OPS[AgentsOps]
        BRAIN[AgentsBrain]
    end
    
    UI --> GW
    GW --> AUTH
    GW --> KAFKA
    
    KAFKA --> FLOW
    KAFKA --> TASK
    KAFKA --> OPS
    KAFKA --> BRAIN
    
    FLOW --> TASK
    TASK --> BRAIN
    OPS --> FLOW
    OPS --> TASK
```

---

**Son Güncelleme:** 2025-01-22  
**Versiyonu:** v1.0  
**Sorumlu:** AgentsPalace Architecture Team
