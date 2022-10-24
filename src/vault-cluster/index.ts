// https://www.terraform.io/docs/providers/hcp/r/vault_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Vault cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#cluster_id VaultCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The ID of the HVN this HCP Vault cluster is associated to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#hvn_id VaultCluster#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#id VaultCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum Vault version to use when creating the cluster. If not specified, it is defaulted to the version that is currently recommended by HCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#min_vault_version VaultCluster#min_vault_version}
  */
  readonly minVaultVersion?: string;
  /**
  * The performance replication [paths filter](https://learn.hashicorp.com/tutorials/vault/paths-filter). Applies to performance replication secondaries only and operates in "deny" mode only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#paths_filter VaultCluster#paths_filter}
  */
  readonly pathsFilter?: string[];
  /**
  * The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. If not specified, it is a standalone Plus tier HCP Vault cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#primary_link VaultCluster#primary_link}
  */
  readonly primaryLink?: string;
  /**
  * Denotes that the cluster has a public endpoint. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#public_endpoint VaultCluster#public_endpoint}
  */
  readonly publicEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Tier of the HCP Vault cluster. Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://cloud.hashicorp.com/pricing/vault). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#tier VaultCluster#tier}
  */
  readonly tier?: string;
  /**
  * audit_log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#audit_log_config VaultCluster#audit_log_config}
  */
  readonly auditLogConfig?: VaultClusterAuditLogConfig;
  /**
  * major_version_upgrade_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}
  */
  readonly majorVersionUpgradeConfig?: VaultClusterMajorVersionUpgradeConfig;
  /**
  * metrics_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#metrics_config VaultCluster#metrics_config}
  */
  readonly metricsConfig?: VaultClusterMetricsConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#timeouts VaultCluster#timeouts}
  */
  readonly timeouts?: VaultClusterTimeouts;
}
export interface VaultClusterAuditLogConfig {
  /**
  * Datadog api key for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * Datadog region for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_region VaultCluster#datadog_region}
  */
  readonly datadogRegion?: string;
  /**
  * Grafana endpoint for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}
  */
  readonly grafanaEndpoint?: string;
  /**
  * Grafana password for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_password VaultCluster#grafana_password}
  */
  readonly grafanaPassword?: string;
  /**
  * Grafana user for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_user VaultCluster#grafana_user}
  */
  readonly grafanaUser?: string;
  /**
  * Splunk endpoint for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}
  */
  readonly splunkHecendpoint?: string;
  /**
  * Splunk token for streaming audit logs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_token VaultCluster#splunk_token}
  */
  readonly splunkToken?: string;
}

export function vaultClusterAuditLogConfigToTerraform(struct?: VaultClusterAuditLogConfigOutputReference | VaultClusterAuditLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    datadog_region: cdktf.stringToTerraform(struct!.datadogRegion),
    grafana_endpoint: cdktf.stringToTerraform(struct!.grafanaEndpoint),
    grafana_password: cdktf.stringToTerraform(struct!.grafanaPassword),
    grafana_user: cdktf.stringToTerraform(struct!.grafanaUser),
    splunk_hecendpoint: cdktf.stringToTerraform(struct!.splunkHecendpoint),
    splunk_token: cdktf.stringToTerraform(struct!.splunkToken),
  }
}

export class VaultClusterAuditLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultClusterAuditLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._datadogRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogRegion = this._datadogRegion;
    }
    if (this._grafanaEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaEndpoint = this._grafanaEndpoint;
    }
    if (this._grafanaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaPassword = this._grafanaPassword;
    }
    if (this._grafanaUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaUser = this._grafanaUser;
    }
    if (this._splunkHecendpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHecendpoint = this._splunkHecendpoint;
    }
    if (this._splunkToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkToken = this._splunkToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultClusterAuditLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datadogApiKey = undefined;
      this._datadogRegion = undefined;
      this._grafanaEndpoint = undefined;
      this._grafanaPassword = undefined;
      this._grafanaUser = undefined;
      this._splunkHecendpoint = undefined;
      this._splunkToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datadogApiKey = value.datadogApiKey;
      this._datadogRegion = value.datadogRegion;
      this._grafanaEndpoint = value.grafanaEndpoint;
      this._grafanaPassword = value.grafanaPassword;
      this._grafanaUser = value.grafanaUser;
      this._splunkHecendpoint = value.splunkHecendpoint;
      this._splunkToken = value.splunkToken;
    }
  }

  // datadog_api_key - computed: false, optional: true, required: false
  private _datadogApiKey?: string; 
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }
  public set datadogApiKey(value: string) {
    this._datadogApiKey = value;
  }
  public resetDatadogApiKey() {
    this._datadogApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey;
  }

  // datadog_region - computed: false, optional: true, required: false
  private _datadogRegion?: string; 
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }
  public set datadogRegion(value: string) {
    this._datadogRegion = value;
  }
  public resetDatadogRegion() {
    this._datadogRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogRegionInput() {
    return this._datadogRegion;
  }

  // grafana_endpoint - computed: false, optional: true, required: false
  private _grafanaEndpoint?: string; 
  public get grafanaEndpoint() {
    return this.getStringAttribute('grafana_endpoint');
  }
  public set grafanaEndpoint(value: string) {
    this._grafanaEndpoint = value;
  }
  public resetGrafanaEndpoint() {
    this._grafanaEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaEndpointInput() {
    return this._grafanaEndpoint;
  }

  // grafana_password - computed: false, optional: true, required: false
  private _grafanaPassword?: string; 
  public get grafanaPassword() {
    return this.getStringAttribute('grafana_password');
  }
  public set grafanaPassword(value: string) {
    this._grafanaPassword = value;
  }
  public resetGrafanaPassword() {
    this._grafanaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaPasswordInput() {
    return this._grafanaPassword;
  }

  // grafana_user - computed: false, optional: true, required: false
  private _grafanaUser?: string; 
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }
  public set grafanaUser(value: string) {
    this._grafanaUser = value;
  }
  public resetGrafanaUser() {
    this._grafanaUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaUserInput() {
    return this._grafanaUser;
  }

  // splunk_hecendpoint - computed: false, optional: true, required: false
  private _splunkHecendpoint?: string; 
  public get splunkHecendpoint() {
    return this.getStringAttribute('splunk_hecendpoint');
  }
  public set splunkHecendpoint(value: string) {
    this._splunkHecendpoint = value;
  }
  public resetSplunkHecendpoint() {
    this._splunkHecendpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecendpointInput() {
    return this._splunkHecendpoint;
  }

  // splunk_token - computed: false, optional: true, required: false
  private _splunkToken?: string; 
  public get splunkToken() {
    return this.getStringAttribute('splunk_token');
  }
  public set splunkToken(value: string) {
    this._splunkToken = value;
  }
  public resetSplunkToken() {
    this._splunkToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTokenInput() {
    return this._splunkToken;
  }
}
export interface VaultClusterMajorVersionUpgradeConfig {
  /**
  * The maintenance day of the week for scheduled upgrades. Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}
  */
  readonly maintenanceWindowDay?: string;
  /**
  * The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#upgrade_type VaultCluster#upgrade_type}
  */
  readonly upgradeType: string;
}

export function vaultClusterMajorVersionUpgradeConfigToTerraform(struct?: VaultClusterMajorVersionUpgradeConfigOutputReference | VaultClusterMajorVersionUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window_day: cdktf.stringToTerraform(struct!.maintenanceWindowDay),
    maintenance_window_time: cdktf.stringToTerraform(struct!.maintenanceWindowTime),
    upgrade_type: cdktf.stringToTerraform(struct!.upgradeType),
  }
}

export class VaultClusterMajorVersionUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultClusterMajorVersionUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowDay = this._maintenanceWindowDay;
    }
    if (this._maintenanceWindowTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowTime = this._maintenanceWindowTime;
    }
    if (this._upgradeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeType = this._upgradeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultClusterMajorVersionUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindowDay = undefined;
      this._maintenanceWindowTime = undefined;
      this._upgradeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindowDay = value.maintenanceWindowDay;
      this._maintenanceWindowTime = value.maintenanceWindowTime;
      this._upgradeType = value.upgradeType;
    }
  }

  // maintenance_window_day - computed: false, optional: true, required: false
  private _maintenanceWindowDay?: string; 
  public get maintenanceWindowDay() {
    return this.getStringAttribute('maintenance_window_day');
  }
  public set maintenanceWindowDay(value: string) {
    this._maintenanceWindowDay = value;
  }
  public resetMaintenanceWindowDay() {
    this._maintenanceWindowDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDayInput() {
    return this._maintenanceWindowDay;
  }

  // maintenance_window_time - computed: false, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // upgrade_type - computed: false, optional: false, required: true
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
  }
}
export interface VaultClusterMetricsConfig {
  /**
  * Datadog api key for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * Datadog region for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_region VaultCluster#datadog_region}
  */
  readonly datadogRegion?: string;
  /**
  * Grafana endpoint for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}
  */
  readonly grafanaEndpoint?: string;
  /**
  * Grafana password for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_password VaultCluster#grafana_password}
  */
  readonly grafanaPassword?: string;
  /**
  * Grafana user for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_user VaultCluster#grafana_user}
  */
  readonly grafanaUser?: string;
  /**
  * Splunk endpoint for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}
  */
  readonly splunkHecendpoint?: string;
  /**
  * Splunk token for streaming metrics
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_token VaultCluster#splunk_token}
  */
  readonly splunkToken?: string;
}

export function vaultClusterMetricsConfigToTerraform(struct?: VaultClusterMetricsConfigOutputReference | VaultClusterMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    datadog_region: cdktf.stringToTerraform(struct!.datadogRegion),
    grafana_endpoint: cdktf.stringToTerraform(struct!.grafanaEndpoint),
    grafana_password: cdktf.stringToTerraform(struct!.grafanaPassword),
    grafana_user: cdktf.stringToTerraform(struct!.grafanaUser),
    splunk_hecendpoint: cdktf.stringToTerraform(struct!.splunkHecendpoint),
    splunk_token: cdktf.stringToTerraform(struct!.splunkToken),
  }
}

export class VaultClusterMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultClusterMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._datadogRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogRegion = this._datadogRegion;
    }
    if (this._grafanaEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaEndpoint = this._grafanaEndpoint;
    }
    if (this._grafanaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaPassword = this._grafanaPassword;
    }
    if (this._grafanaUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaUser = this._grafanaUser;
    }
    if (this._splunkHecendpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHecendpoint = this._splunkHecendpoint;
    }
    if (this._splunkToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkToken = this._splunkToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultClusterMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datadogApiKey = undefined;
      this._datadogRegion = undefined;
      this._grafanaEndpoint = undefined;
      this._grafanaPassword = undefined;
      this._grafanaUser = undefined;
      this._splunkHecendpoint = undefined;
      this._splunkToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datadogApiKey = value.datadogApiKey;
      this._datadogRegion = value.datadogRegion;
      this._grafanaEndpoint = value.grafanaEndpoint;
      this._grafanaPassword = value.grafanaPassword;
      this._grafanaUser = value.grafanaUser;
      this._splunkHecendpoint = value.splunkHecendpoint;
      this._splunkToken = value.splunkToken;
    }
  }

  // datadog_api_key - computed: false, optional: true, required: false
  private _datadogApiKey?: string; 
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }
  public set datadogApiKey(value: string) {
    this._datadogApiKey = value;
  }
  public resetDatadogApiKey() {
    this._datadogApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey;
  }

  // datadog_region - computed: false, optional: true, required: false
  private _datadogRegion?: string; 
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }
  public set datadogRegion(value: string) {
    this._datadogRegion = value;
  }
  public resetDatadogRegion() {
    this._datadogRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogRegionInput() {
    return this._datadogRegion;
  }

  // grafana_endpoint - computed: false, optional: true, required: false
  private _grafanaEndpoint?: string; 
  public get grafanaEndpoint() {
    return this.getStringAttribute('grafana_endpoint');
  }
  public set grafanaEndpoint(value: string) {
    this._grafanaEndpoint = value;
  }
  public resetGrafanaEndpoint() {
    this._grafanaEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaEndpointInput() {
    return this._grafanaEndpoint;
  }

  // grafana_password - computed: false, optional: true, required: false
  private _grafanaPassword?: string; 
  public get grafanaPassword() {
    return this.getStringAttribute('grafana_password');
  }
  public set grafanaPassword(value: string) {
    this._grafanaPassword = value;
  }
  public resetGrafanaPassword() {
    this._grafanaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaPasswordInput() {
    return this._grafanaPassword;
  }

  // grafana_user - computed: false, optional: true, required: false
  private _grafanaUser?: string; 
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }
  public set grafanaUser(value: string) {
    this._grafanaUser = value;
  }
  public resetGrafanaUser() {
    this._grafanaUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaUserInput() {
    return this._grafanaUser;
  }

  // splunk_hecendpoint - computed: false, optional: true, required: false
  private _splunkHecendpoint?: string; 
  public get splunkHecendpoint() {
    return this.getStringAttribute('splunk_hecendpoint');
  }
  public set splunkHecendpoint(value: string) {
    this._splunkHecendpoint = value;
  }
  public resetSplunkHecendpoint() {
    this._splunkHecendpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecendpointInput() {
    return this._splunkHecendpoint;
  }

  // splunk_token - computed: false, optional: true, required: false
  private _splunkToken?: string; 
  public get splunkToken() {
    return this.getStringAttribute('splunk_token');
  }
  public set splunkToken(value: string) {
    this._splunkToken = value;
  }
  public resetSplunkToken() {
    this._splunkToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTokenInput() {
    return this._splunkToken;
  }
}
export interface VaultClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#create VaultCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#default VaultCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#delete VaultCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#update VaultCluster#update}
  */
  readonly update?: string;
}

export function vaultClusterTimeoutsToTerraform(struct?: VaultClusterTimeoutsOutputReference | VaultClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VaultClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VaultClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster hcp_vault_cluster}
*/
export class VaultCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster hcp_vault_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultClusterConfig
  */
  public constructor(scope: Construct, id: string, config: VaultClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.47.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._hvnId = config.hvnId;
    this._id = config.id;
    this._minVaultVersion = config.minVaultVersion;
    this._pathsFilter = config.pathsFilter;
    this._primaryLink = config.primaryLink;
    this._publicEndpoint = config.publicEndpoint;
    this._tier = config.tier;
    this._auditLogConfig.internalValue = config.auditLogConfig;
    this._majorVersionUpgradeConfig.internalValue = config.majorVersionUpgradeConfig;
    this._metricsConfig.internalValue = config.metricsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // hvn_id - computed: false, optional: false, required: true
  private _hvnId?: string; 
  public get hvnId() {
    return this.getStringAttribute('hvn_id');
  }
  public set hvnId(value: string) {
    this._hvnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvnIdInput() {
    return this._hvnId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // min_vault_version - computed: false, optional: true, required: false
  private _minVaultVersion?: string; 
  public get minVaultVersion() {
    return this.getStringAttribute('min_vault_version');
  }
  public set minVaultVersion(value: string) {
    this._minVaultVersion = value;
  }
  public resetMinVaultVersion() {
    this._minVaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVaultVersionInput() {
    return this._minVaultVersion;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // paths_filter - computed: false, optional: true, required: false
  private _pathsFilter?: string[]; 
  public get pathsFilter() {
    return this.getListAttribute('paths_filter');
  }
  public set pathsFilter(value: string[]) {
    this._pathsFilter = value;
  }
  public resetPathsFilter() {
    this._pathsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsFilterInput() {
    return this._pathsFilter;
  }

  // primary_link - computed: false, optional: true, required: false
  private _primaryLink?: string; 
  public get primaryLink() {
    return this.getStringAttribute('primary_link');
  }
  public set primaryLink(value: string) {
    this._primaryLink = value;
  }
  public resetPrimaryLink() {
    this._primaryLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLinkInput() {
    return this._primaryLink;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_endpoint - computed: false, optional: true, required: false
  private _publicEndpoint?: boolean | cdktf.IResolvable; 
  public get publicEndpoint() {
    return this.getBooleanAttribute('public_endpoint');
  }
  public set publicEndpoint(value: boolean | cdktf.IResolvable) {
    this._publicEndpoint = value;
  }
  public resetPublicEndpoint() {
    this._publicEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointInput() {
    return this._publicEndpoint;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // vault_private_endpoint_url - computed: true, optional: false, required: false
  public get vaultPrivateEndpointUrl() {
    return this.getStringAttribute('vault_private_endpoint_url');
  }

  // vault_public_endpoint_url - computed: true, optional: false, required: false
  public get vaultPublicEndpointUrl() {
    return this.getStringAttribute('vault_public_endpoint_url');
  }

  // vault_version - computed: true, optional: false, required: false
  public get vaultVersion() {
    return this.getStringAttribute('vault_version');
  }

  // audit_log_config - computed: false, optional: true, required: false
  private _auditLogConfig = new VaultClusterAuditLogConfigOutputReference(this, "audit_log_config");
  public get auditLogConfig() {
    return this._auditLogConfig;
  }
  public putAuditLogConfig(value: VaultClusterAuditLogConfig) {
    this._auditLogConfig.internalValue = value;
  }
  public resetAuditLogConfig() {
    this._auditLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigInput() {
    return this._auditLogConfig.internalValue;
  }

  // major_version_upgrade_config - computed: false, optional: true, required: false
  private _majorVersionUpgradeConfig = new VaultClusterMajorVersionUpgradeConfigOutputReference(this, "major_version_upgrade_config");
  public get majorVersionUpgradeConfig() {
    return this._majorVersionUpgradeConfig;
  }
  public putMajorVersionUpgradeConfig(value: VaultClusterMajorVersionUpgradeConfig) {
    this._majorVersionUpgradeConfig.internalValue = value;
  }
  public resetMajorVersionUpgradeConfig() {
    this._majorVersionUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionUpgradeConfigInput() {
    return this._majorVersionUpgradeConfig.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new VaultClusterMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: VaultClusterMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VaultClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VaultClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      hvn_id: cdktf.stringToTerraform(this._hvnId),
      id: cdktf.stringToTerraform(this._id),
      min_vault_version: cdktf.stringToTerraform(this._minVaultVersion),
      paths_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pathsFilter),
      primary_link: cdktf.stringToTerraform(this._primaryLink),
      public_endpoint: cdktf.booleanToTerraform(this._publicEndpoint),
      tier: cdktf.stringToTerraform(this._tier),
      audit_log_config: vaultClusterAuditLogConfigToTerraform(this._auditLogConfig.internalValue),
      major_version_upgrade_config: vaultClusterMajorVersionUpgradeConfigToTerraform(this._majorVersionUpgradeConfig.internalValue),
      metrics_config: vaultClusterMetricsConfigToTerraform(this._metricsConfig.internalValue),
      timeouts: vaultClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
