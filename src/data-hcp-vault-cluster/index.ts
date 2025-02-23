// https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpVaultClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Vault cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#cluster_id DataHcpVaultCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 
  * The ID of the HCP project where the Vault cluster is located.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#project_id DataHcpVaultCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * audit_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#audit_log_config DataHcpVaultCluster#audit_log_config}
  */
  readonly auditLogConfig?: DataHcpVaultClusterAuditLogConfig[] | cdktf.IResolvable;
  /**
  * metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#metrics_config DataHcpVaultCluster#metrics_config}
  */
  readonly metricsConfig?: DataHcpVaultClusterMetricsConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#timeouts DataHcpVaultCluster#timeouts}
  */
  readonly timeouts?: DataHcpVaultClusterTimeouts;
}
export interface DataHcpVaultClusterIpAllowlistStruct {
}

export function dataHcpVaultClusterIpAllowlistStructToTerraform(struct?: DataHcpVaultClusterIpAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcpVaultClusterIpAllowlistStructToHclTerraform(struct?: DataHcpVaultClusterIpAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcpVaultClusterIpAllowlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcpVaultClusterIpAllowlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpVaultClusterIpAllowlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DataHcpVaultClusterIpAllowlistStructList extends cdktf.ComplexList {

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
  public get(index: number): DataHcpVaultClusterIpAllowlistStructOutputReference {
    return new DataHcpVaultClusterIpAllowlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
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


export function dataHcpVaultClusterMajorVersionUpgradeConfigToHclTerraform(struct?: DataHcpVaultClusterMajorVersionUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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


export function dataHcpVaultClusterAuditLogConfigToHclTerraform(struct?: DataHcpVaultClusterAuditLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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

  // cloudwatch_access_key_id - computed: true, optional: false, required: false
  public get cloudwatchAccessKeyId() {
    return this.getStringAttribute('cloudwatch_access_key_id');
  }

  // cloudwatch_group_name - computed: true, optional: false, required: false
  public get cloudwatchGroupName() {
    return this.getStringAttribute('cloudwatch_group_name');
  }

  // cloudwatch_region - computed: true, optional: false, required: false
  public get cloudwatchRegion() {
    return this.getStringAttribute('cloudwatch_region');
  }

  // cloudwatch_secret_access_key - computed: true, optional: false, required: false
  public get cloudwatchSecretAccessKey() {
    return this.getStringAttribute('cloudwatch_secret_access_key');
  }

  // cloudwatch_stream_name - computed: true, optional: false, required: false
  public get cloudwatchStreamName() {
    return this.getStringAttribute('cloudwatch_stream_name');
  }

  // datadog_region - computed: true, optional: false, required: false
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }

  // elasticsearch_dataset - computed: true, optional: false, required: false
  public get elasticsearchDataset() {
    return this.getStringAttribute('elasticsearch_dataset');
  }

  // elasticsearch_endpoint - computed: true, optional: false, required: false
  public get elasticsearchEndpoint() {
    return this.getStringAttribute('elasticsearch_endpoint');
  }

  // elasticsearch_password - computed: true, optional: false, required: false
  public get elasticsearchPassword() {
    return this.getStringAttribute('elasticsearch_password');
  }

  // elasticsearch_user - computed: true, optional: false, required: false
  public get elasticsearchUser() {
    return this.getStringAttribute('elasticsearch_user');
  }

  // grafana_endpoint - computed: true, optional: false, required: false
  public get grafanaEndpoint() {
    return this.getStringAttribute('grafana_endpoint');
  }

  // grafana_user - computed: true, optional: false, required: false
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }

  // http_basic_password - computed: true, optional: false, required: false
  public get httpBasicPassword() {
    return this.getStringAttribute('http_basic_password');
  }

  // http_basic_user - computed: true, optional: false, required: false
  public get httpBasicUser() {
    return this.getStringAttribute('http_basic_user');
  }

  // http_bearer_token - computed: true, optional: false, required: false
  public get httpBearerToken() {
    return this.getStringAttribute('http_bearer_token');
  }

  // http_codec - computed: true, optional: false, required: false
  public get httpCodec() {
    return this.getStringAttribute('http_codec');
  }

  // http_compression - computed: true, optional: false, required: false
  public get httpCompression() {
    return this.getBooleanAttribute('http_compression');
  }

  // http_headers - computed: true, optional: false, required: false
  private _httpHeaders = new cdktf.StringMap(this, "http_headers");
  public get httpHeaders() {
    return this._httpHeaders;
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_payload_prefix - computed: true, optional: false, required: false
  public get httpPayloadPrefix() {
    return this.getStringAttribute('http_payload_prefix');
  }

  // http_payload_suffix - computed: true, optional: false, required: false
  public get httpPayloadSuffix() {
    return this.getStringAttribute('http_payload_suffix');
  }

  // http_uri - computed: true, optional: false, required: false
  public get httpUri() {
    return this.getStringAttribute('http_uri');
  }

  // newrelic_account_id - computed: true, optional: false, required: false
  public get newrelicAccountId() {
    return this.getStringAttribute('newrelic_account_id');
  }

  // newrelic_license_key - computed: true, optional: false, required: false
  public get newrelicLicenseKey() {
    return this.getStringAttribute('newrelic_license_key');
  }

  // newrelic_region - computed: true, optional: false, required: false
  public get newrelicRegion() {
    return this.getStringAttribute('newrelic_region');
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


export function dataHcpVaultClusterMetricsConfigToHclTerraform(struct?: DataHcpVaultClusterMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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

  // cloudwatch_access_key_id - computed: true, optional: false, required: false
  public get cloudwatchAccessKeyId() {
    return this.getStringAttribute('cloudwatch_access_key_id');
  }

  // cloudwatch_namespace - computed: true, optional: false, required: false
  public get cloudwatchNamespace() {
    return this.getStringAttribute('cloudwatch_namespace');
  }

  // cloudwatch_region - computed: true, optional: false, required: false
  public get cloudwatchRegion() {
    return this.getStringAttribute('cloudwatch_region');
  }

  // cloudwatch_secret_access_key - computed: true, optional: false, required: false
  public get cloudwatchSecretAccessKey() {
    return this.getStringAttribute('cloudwatch_secret_access_key');
  }

  // datadog_region - computed: true, optional: false, required: false
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }

  // elasticsearch_dataset - computed: true, optional: false, required: false
  public get elasticsearchDataset() {
    return this.getStringAttribute('elasticsearch_dataset');
  }

  // elasticsearch_endpoint - computed: true, optional: false, required: false
  public get elasticsearchEndpoint() {
    return this.getStringAttribute('elasticsearch_endpoint');
  }

  // elasticsearch_password - computed: true, optional: false, required: false
  public get elasticsearchPassword() {
    return this.getStringAttribute('elasticsearch_password');
  }

  // elasticsearch_user - computed: true, optional: false, required: false
  public get elasticsearchUser() {
    return this.getStringAttribute('elasticsearch_user');
  }

  // grafana_endpoint - computed: true, optional: false, required: false
  public get grafanaEndpoint() {
    return this.getStringAttribute('grafana_endpoint');
  }

  // grafana_user - computed: true, optional: false, required: false
  public get grafanaUser() {
    return this.getStringAttribute('grafana_user');
  }

  // http_basic_password - computed: true, optional: false, required: false
  public get httpBasicPassword() {
    return this.getStringAttribute('http_basic_password');
  }

  // http_basic_user - computed: true, optional: false, required: false
  public get httpBasicUser() {
    return this.getStringAttribute('http_basic_user');
  }

  // http_bearer_token - computed: true, optional: false, required: false
  public get httpBearerToken() {
    return this.getStringAttribute('http_bearer_token');
  }

  // http_codec - computed: true, optional: false, required: false
  public get httpCodec() {
    return this.getStringAttribute('http_codec');
  }

  // http_compression - computed: true, optional: false, required: false
  public get httpCompression() {
    return this.getBooleanAttribute('http_compression');
  }

  // http_headers - computed: true, optional: false, required: false
  private _httpHeaders = new cdktf.StringMap(this, "http_headers");
  public get httpHeaders() {
    return this._httpHeaders;
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_payload_prefix - computed: true, optional: false, required: false
  public get httpPayloadPrefix() {
    return this.getStringAttribute('http_payload_prefix');
  }

  // http_payload_suffix - computed: true, optional: false, required: false
  public get httpPayloadSuffix() {
    return this.getStringAttribute('http_payload_suffix');
  }

  // http_uri - computed: true, optional: false, required: false
  public get httpUri() {
    return this.getStringAttribute('http_uri');
  }

  // newrelic_account_id - computed: true, optional: false, required: false
  public get newrelicAccountId() {
    return this.getStringAttribute('newrelic_account_id');
  }

  // newrelic_license_key - computed: true, optional: false, required: false
  public get newrelicLicenseKey() {
    return this.getStringAttribute('newrelic_license_key');
  }

  // newrelic_region - computed: true, optional: false, required: false
  public get newrelicRegion() {
    return this.getStringAttribute('newrelic_region');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}
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


export function dataHcpVaultClusterTimeoutsToHclTerraform(struct?: DataHcpVaultClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster hcp_vault_cluster}
*/
export class DataHcpVaultCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpVaultCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpVaultCluster to import
  * @param importFromId The id of the existing DataHcpVaultCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpVaultCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.103.0/docs/data-sources/vault_cluster hcp_vault_cluster} Data Source
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
        providerVersion: '0.103.0',
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

  // ip_allowlist - computed: true, optional: false, required: false
  private _ipAllowlist = new DataHcpVaultClusterIpAllowlistStructList(this, "ip_allowlist", false);
  public get ipAllowlist() {
    return this._ipAllowlist;
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

  // proxy_endpoint - computed: true, optional: false, required: false
  public get proxyEndpoint() {
    return this.getStringAttribute('proxy_endpoint');
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

  // vault_proxy_endpoint_url - computed: true, optional: false, required: false
  public get vaultProxyEndpointUrl() {
    return this.getStringAttribute('vault_proxy_endpoint_url');
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_log_config: {
        value: cdktf.listMapperHcl(dataHcpVaultClusterAuditLogConfigToHclTerraform, true)(this._auditLogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHcpVaultClusterAuditLogConfigList",
      },
      metrics_config: {
        value: cdktf.listMapperHcl(dataHcpVaultClusterMetricsConfigToHclTerraform, true)(this._metricsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHcpVaultClusterMetricsConfigList",
      },
      timeouts: {
        value: dataHcpVaultClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataHcpVaultClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
