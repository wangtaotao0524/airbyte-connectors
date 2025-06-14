import {
  Build as AzureBuild,
  BuildArtifact,
} from 'azure-devops-node-api/interfaces/BuildInterfaces';
import {CodeCoverageStatistics} from 'azure-devops-node-api/interfaces/TestInterfaces';
import {
  AzureDevOpsConfig,
  TimelineRecord,
} from 'faros-airbyte-common/azure-devops';

export interface AzurePipelineConfig extends AzureDevOpsConfig {
  pipelines?: string[];
}

export interface PipelineReference {
  id: number;
  name: string;
}

export interface Build extends AzureBuild {
  artifacts: BuildArtifact[];
  coverageStats: CodeCoverageStatistics[];
  stages: TimelineRecord[];
}
