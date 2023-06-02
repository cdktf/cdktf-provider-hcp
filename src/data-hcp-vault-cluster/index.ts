/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpVaultClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Vault cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#cluster_id DataHcpVaultCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the HCP project where the Vault cluster is located.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#project_id DataHcpVaultCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * audit_log_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#audit_log_config DataHcpVaultCluster#audit_log_config}
  */
  readonly auditLogConfig?: DataHcpVaultClusterAuditLogConfig[] | cdktf.IResolvable;
  /**
  * metrics_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#metrics_config DataHcpVaultCluster#metrics_config}
  */
  readonly metricsConfig?: DataHcpVaultClusterMetricsConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#timeouts DataHcpVaultCluster#timeouts}
  */
  readonly timeouts?: DataHcpVaultClusterTimeouts;
}
export interface DataHcpVaultClusterMajorVersionUpgradeConfig {
}

export function dataHcpVaultClusterMajorVersionUpgradeConfigToTerraform(struct?: DataHcpVaultClusterMajorVersionUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHcpVaultClusterMajorVersionUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpVaultClusterMajorVersionUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maintenance_window_day - computed: true, optional: false, required: false
  public get maintenanceWindowDay() {
    return this.getStringAttribute('maintenance_window_day');
  }

  // maintenance_window_time - computed: true, optional: false, required: false
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }

  // upgrade_type - computed: true, optional: false, required: false
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
}

export class DataHcpVaultClusterMajorVersionUpgradeConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference {
    return new DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcpVaultClusterAuditLogConfig {
}

export function dataHcpVaultClusterAuditLogConfigToTerraform(struct?: DataHcpVaultClusterAuditLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataHcpVaultClusterAuditLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHcpVaultClusterAuditLogConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpVaultClusterAuditLogConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // datadog_region - computed: true, optional: false, required: false
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }

  // grafana_endpoint - computed: true, optional: false, required: false
  public get grafanaEndpoint() {
    return this.getStringAttribute('grafana_endpoint');
  }

  // grafana_user - computed: true, optional: false, required: false
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }

  // splunk_hecendpoint - computed: true, optional: false, required: false
  public get splunkHecendpoint() {
    return this.getStringAttribute('splunk_hecendpoint');
  }
}

export class DataHcpVaultClusterAuditLogConfigList extends cdktf.ComplexList {
  public internalValue? : DataHcpVaultClusterAuditLogConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHcpVaultClusterAuditLogConfigOutputReference {
    return new DataHcpVaultClusterAuditLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcpVaultClusterMetricsConfig {
}

export function dataHcpVaultClusterMetricsConfigToTerraform(struct?: DataHcpVaultClusterMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataHcpVaultClusterMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHcpVaultClusterMetricsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpVaultClusterMetricsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // datadog_region - computed: true, optional: false, required: false
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }

  // grafana_endpoint - computed: true, optional: false, required: false
  public get grafanaEndpoint() {
    return this.getStringAttribute('grafana_endpoint');
  }

  // grafana_user - computed: true, optional: false, required: false
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }

  // splunk_hecendpoint - computed: true, optional: false, required: false
  public get splunkHecendpoint() {
    return this.getStringAttribute('splunk_hecendpoint');
  }
}

export class DataHcpVaultClusterMetricsConfigList extends cdktf.ComplexList {
  public internalValue? : DataHcpVaultClusterMetricsConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataHcpVaultClusterMetricsConfigOutputReference {
    return new DataHcpVaultClusterMetricsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcpVaultClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}
  */
  readonly default?: string;
}

export function dataHcpVaultClusterTimeoutsToTerraform(struct?: DataHcpVaultClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcpVaultClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpVaultClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpVaultClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster hcp_vault_cluster}
*/
export class DataHcpVaultCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.59.0/docs/data-sources/vault_cluster hcp_vault_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpVaultClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpVaultClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.59.0',
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
    this._id = config.id;
    this._projectId = config.projectId;
    this._auditLogConfig.internalValue = config.auditLogConfig;
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

  // hvn_id - computed: true, optional: false, required: false
  public get hvnId() {
    return this.getStringAttribute('hvn_id');
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

  // major_version_upgrade_config - computed: true, optional: false, required: false
  private _majorVersionUpgradeConfig = new DataHcpVaultClusterMajorVersionUpgradeConfigList(this, "major_version_upgrade_config", false);
  public get majorVersionUpgradeConfig() {
    return this._majorVersionUpgradeConfig;
  }

  // min_vault_version - computed: true, optional: false, required: false
  public get minVaultVersion() {
    return this.getStringAttribute('min_vault_version');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // paths_filter - computed: true, optional: false, required: false
  public get pathsFilter() {
    return this.getListAttribute('paths_filter');
  }

  // primary_link - computed: true, optional: false, required: false
  public get primaryLink() {
    return this.getStringAttribute('primary_link');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getBooleanAttribute('public_endpoint');
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

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
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
  private _auditLogConfig = new DataHcpVaultClusterAuditLogConfigList(this, "audit_log_config", false);
  public get auditLogConfig() {
    return this._auditLogConfig;
  }
  public putAuditLogConfig(value: DataHcpVaultClusterAuditLogConfig[] | cdktf.IResolvable) {
    this._auditLogConfig.internalValue = value;
  }
  public resetAuditLogConfig() {
    this._auditLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigInput() {
    return this._auditLogConfig.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new DataHcpVaultClusterMetricsConfigList(this, "metrics_config", false);
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: DataHcpVaultClusterMetricsConfig[] | cdktf.IResolvable) {
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
  private _timeouts = new DataHcpVaultClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpVaultClusterTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      audit_log_config: cdktf.listMapper(dataHcpVaultClusterAuditLogConfigToTerraform, true)(this._auditLogConfig.internalValue),
      metrics_config: cdktf.listMapper(dataHcpVaultClusterMetricsConfigToTerraform, true)(this._metricsConfig.internalValue),
      timeouts: dataHcpVaultClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
