/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Vault cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cluster_id VaultCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The ID of the HVN this HCP Vault cluster is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#hvn_id VaultCluster#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#id VaultCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum Vault version to use when creating the cluster. If not specified, it is defaulted to the version that is currently recommended by HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#min_vault_version VaultCluster#min_vault_version}
  */
  readonly minVaultVersion?: string;
  /**
  * The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#paths_filter VaultCluster#paths_filter}
  */
  readonly pathsFilter?: string[];
  /**
  * The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. If not specified, it is a standalone Plus tier HCP Vault cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#primary_link VaultCluster#primary_link}
  */
  readonly primaryLink?: string;
  /**
  * 
  * The ID of the HCP project where the Vault cluster is located.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#project_id VaultCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * Denotes that the cluster has a proxy endpoint. Valid options are `ENABLED`, `DISABLED`. Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#proxy_endpoint VaultCluster#proxy_endpoint}
  */
  readonly proxyEndpoint?: string;
  /**
  * Denotes that the cluster has a public endpoint. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#public_endpoint VaultCluster#public_endpoint}
  */
  readonly publicEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Tier of the HCP Vault cluster. Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://www.hashicorp.com/products/vault/pricing). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#tier VaultCluster#tier}
  */
  readonly tier?: string;
  /**
  * audit_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#audit_log_config VaultCluster#audit_log_config}
  */
  readonly auditLogConfig?: VaultClusterAuditLogConfig;
  /**
  * ip_allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#ip_allowlist VaultCluster#ip_allowlist}
  */
  readonly ipAllowlist?: VaultClusterIpAllowlistStruct[] | cdktf.IResolvable;
  /**
  * major_version_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}
  */
  readonly majorVersionUpgradeConfig?: VaultClusterMajorVersionUpgradeConfig;
  /**
  * metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#metrics_config VaultCluster#metrics_config}
  */
  readonly metricsConfig?: VaultClusterMetricsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#timeouts VaultCluster#timeouts}
  */
  readonly timeouts?: VaultClusterTimeouts;
}
export interface VaultClusterAuditLogConfig {
  /**
  * CloudWatch access key ID for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cloudwatch_access_key_id VaultCluster#cloudwatch_access_key_id}
  */
  readonly cloudwatchAccessKeyId?: string;
  /**
  * CloudWatch region for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cloudwatch_region VaultCluster#cloudwatch_region}
  */
  readonly cloudwatchRegion?: string;
  /**
  * CloudWatch secret access key for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cloudwatch_secret_access_key VaultCluster#cloudwatch_secret_access_key}
  */
  readonly cloudwatchSecretAccessKey?: string;
  /**
  * Datadog api key for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * Datadog region for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}
  */
  readonly datadogRegion?: string;
  /**
  * ElasticSearch endpoint for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#elasticsearch_endpoint VaultCluster#elasticsearch_endpoint}
  */
  readonly elasticsearchEndpoint?: string;
  /**
  * ElasticSearch password for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#elasticsearch_password VaultCluster#elasticsearch_password}
  */
  readonly elasticsearchPassword?: string;
  /**
  * ElasticSearch user for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#elasticsearch_user VaultCluster#elasticsearch_user}
  */
  readonly elasticsearchUser?: string;
  /**
  * Grafana endpoint for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}
  */
  readonly grafanaEndpoint?: string;
  /**
  * Grafana password for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}
  */
  readonly grafanaPassword?: string;
  /**
  * Grafana user for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}
  */
  readonly grafanaUser?: string;
  /**
  * HTTP basic authentication password for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user is also provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_basic_password VaultCluster#http_basic_password}
  */
  readonly httpBasicPassword?: string;
  /**
  * HTTP basic authentication username for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_password is also provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_basic_user VaultCluster#http_basic_user}
  */
  readonly httpBasicUser?: string;
  /**
  * HTTP bearer authentication token for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_bearer_token VaultCluster#http_bearer_token}
  */
  readonly httpBearerToken?: string;
  /**
  * HTTP codec for streaming audit logs, allowed values are JSON and NDJSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_codec VaultCluster#http_codec}
  */
  readonly httpCodec?: string;
  /**
  * HTTP compression flag for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_compression VaultCluster#http_compression}
  */
  readonly httpCompression?: boolean | cdktf.IResolvable;
  /**
  * HTTP headers for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_headers VaultCluster#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * HTTP payload method for streaming audit logs, , allowed values are PATCH, POST, or PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_method VaultCluster#http_method}
  */
  readonly httpMethod?: string;
  /**
  * HTTP payload prefix for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_payload_prefix VaultCluster#http_payload_prefix}
  */
  readonly httpPayloadPrefix?: string;
  /**
  * HTTP payload suffix for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_payload_suffix VaultCluster#http_payload_suffix}
  */
  readonly httpPayloadSuffix?: string;
  /**
  * HTTP URI for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_uri VaultCluster#http_uri}
  */
  readonly httpUri?: string;
  /**
  * NewRelic Account ID for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#newrelic_account_id VaultCluster#newrelic_account_id}
  */
  readonly newrelicAccountId?: string;
  /**
  * NewRelic license key for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#newrelic_license_key VaultCluster#newrelic_license_key}
  */
  readonly newrelicLicenseKey?: string;
  /**
  * NewRelic region for streaming audit logs, allowed values are "US" and "EU"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#newrelic_region VaultCluster#newrelic_region}
  */
  readonly newrelicRegion?: string;
  /**
  * Splunk endpoint for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}
  */
  readonly splunkHecendpoint?: string;
  /**
  * Splunk token for streaming audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}
  */
  readonly splunkToken?: string;
}

export function vaultClusterAuditLogConfigToTerraform(struct?: VaultClusterAuditLogConfigOutputReference | VaultClusterAuditLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_access_key_id: cdktf.stringToTerraform(struct!.cloudwatchAccessKeyId),
    cloudwatch_region: cdktf.stringToTerraform(struct!.cloudwatchRegion),
    cloudwatch_secret_access_key: cdktf.stringToTerraform(struct!.cloudwatchSecretAccessKey),
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    datadog_region: cdktf.stringToTerraform(struct!.datadogRegion),
    elasticsearch_endpoint: cdktf.stringToTerraform(struct!.elasticsearchEndpoint),
    elasticsearch_password: cdktf.stringToTerraform(struct!.elasticsearchPassword),
    elasticsearch_user: cdktf.stringToTerraform(struct!.elasticsearchUser),
    grafana_endpoint: cdktf.stringToTerraform(struct!.grafanaEndpoint),
    grafana_password: cdktf.stringToTerraform(struct!.grafanaPassword),
    grafana_user: cdktf.stringToTerraform(struct!.grafanaUser),
    http_basic_password: cdktf.stringToTerraform(struct!.httpBasicPassword),
    http_basic_user: cdktf.stringToTerraform(struct!.httpBasicUser),
    http_bearer_token: cdktf.stringToTerraform(struct!.httpBearerToken),
    http_codec: cdktf.stringToTerraform(struct!.httpCodec),
    http_compression: cdktf.booleanToTerraform(struct!.httpCompression),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_payload_prefix: cdktf.stringToTerraform(struct!.httpPayloadPrefix),
    http_payload_suffix: cdktf.stringToTerraform(struct!.httpPayloadSuffix),
    http_uri: cdktf.stringToTerraform(struct!.httpUri),
    newrelic_account_id: cdktf.stringToTerraform(struct!.newrelicAccountId),
    newrelic_license_key: cdktf.stringToTerraform(struct!.newrelicLicenseKey),
    newrelic_region: cdktf.stringToTerraform(struct!.newrelicRegion),
    splunk_hecendpoint: cdktf.stringToTerraform(struct!.splunkHecendpoint),
    splunk_token: cdktf.stringToTerraform(struct!.splunkToken),
  }
}


export function vaultClusterAuditLogConfigToHclTerraform(struct?: VaultClusterAuditLogConfigOutputReference | VaultClusterAuditLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_region: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_api_key: {
      value: cdktf.stringToHclTerraform(struct!.datadogApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_region: {
      value: cdktf.stringToHclTerraform(struct!.datadogRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch_password: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch_user: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.grafanaEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_password: {
      value: cdktf.stringToHclTerraform(struct!.grafanaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_user: {
      value: cdktf.stringToHclTerraform(struct!.grafanaUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_basic_password: {
      value: cdktf.stringToHclTerraform(struct!.httpBasicPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_basic_user: {
      value: cdktf.stringToHclTerraform(struct!.httpBasicUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.httpBearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_codec: {
      value: cdktf.stringToHclTerraform(struct!.httpCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_compression: {
      value: cdktf.booleanToHclTerraform(struct!.httpCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_payload_prefix: {
      value: cdktf.stringToHclTerraform(struct!.httpPayloadPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_payload_suffix: {
      value: cdktf.stringToHclTerraform(struct!.httpPayloadSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_uri: {
      value: cdktf.stringToHclTerraform(struct!.httpUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newrelic_account_id: {
      value: cdktf.stringToHclTerraform(struct!.newrelicAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newrelic_license_key: {
      value: cdktf.stringToHclTerraform(struct!.newrelicLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newrelic_region: {
      value: cdktf.stringToHclTerraform(struct!.newrelicRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_hecendpoint: {
      value: cdktf.stringToHclTerraform(struct!.splunkHecendpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_token: {
      value: cdktf.stringToHclTerraform(struct!.splunkToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._cloudwatchAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchAccessKeyId = this._cloudwatchAccessKeyId;
    }
    if (this._cloudwatchRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchRegion = this._cloudwatchRegion;
    }
    if (this._cloudwatchSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchSecretAccessKey = this._cloudwatchSecretAccessKey;
    }
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._datadogRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogRegion = this._datadogRegion;
    }
    if (this._elasticsearchEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchEndpoint = this._elasticsearchEndpoint;
    }
    if (this._elasticsearchPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchPassword = this._elasticsearchPassword;
    }
    if (this._elasticsearchUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchUser = this._elasticsearchUser;
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
    if (this._httpBasicPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicPassword = this._httpBasicPassword;
    }
    if (this._httpBasicUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicUser = this._httpBasicUser;
    }
    if (this._httpBearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBearerToken = this._httpBearerToken;
    }
    if (this._httpCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodec = this._httpCodec;
    }
    if (this._httpCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCompression = this._httpCompression;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpPayloadPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPayloadPrefix = this._httpPayloadPrefix;
    }
    if (this._httpPayloadSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPayloadSuffix = this._httpPayloadSuffix;
    }
    if (this._httpUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUri = this._httpUri;
    }
    if (this._newrelicAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelicAccountId = this._newrelicAccountId;
    }
    if (this._newrelicLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelicLicenseKey = this._newrelicLicenseKey;
    }
    if (this._newrelicRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelicRegion = this._newrelicRegion;
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
      this._cloudwatchAccessKeyId = undefined;
      this._cloudwatchRegion = undefined;
      this._cloudwatchSecretAccessKey = undefined;
      this._datadogApiKey = undefined;
      this._datadogRegion = undefined;
      this._elasticsearchEndpoint = undefined;
      this._elasticsearchPassword = undefined;
      this._elasticsearchUser = undefined;
      this._grafanaEndpoint = undefined;
      this._grafanaPassword = undefined;
      this._grafanaUser = undefined;
      this._httpBasicPassword = undefined;
      this._httpBasicUser = undefined;
      this._httpBearerToken = undefined;
      this._httpCodec = undefined;
      this._httpCompression = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpPayloadPrefix = undefined;
      this._httpPayloadSuffix = undefined;
      this._httpUri = undefined;
      this._newrelicAccountId = undefined;
      this._newrelicLicenseKey = undefined;
      this._newrelicRegion = undefined;
      this._splunkHecendpoint = undefined;
      this._splunkToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchAccessKeyId = value.cloudwatchAccessKeyId;
      this._cloudwatchRegion = value.cloudwatchRegion;
      this._cloudwatchSecretAccessKey = value.cloudwatchSecretAccessKey;
      this._datadogApiKey = value.datadogApiKey;
      this._datadogRegion = value.datadogRegion;
      this._elasticsearchEndpoint = value.elasticsearchEndpoint;
      this._elasticsearchPassword = value.elasticsearchPassword;
      this._elasticsearchUser = value.elasticsearchUser;
      this._grafanaEndpoint = value.grafanaEndpoint;
      this._grafanaPassword = value.grafanaPassword;
      this._grafanaUser = value.grafanaUser;
      this._httpBasicPassword = value.httpBasicPassword;
      this._httpBasicUser = value.httpBasicUser;
      this._httpBearerToken = value.httpBearerToken;
      this._httpCodec = value.httpCodec;
      this._httpCompression = value.httpCompression;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpPayloadPrefix = value.httpPayloadPrefix;
      this._httpPayloadSuffix = value.httpPayloadSuffix;
      this._httpUri = value.httpUri;
      this._newrelicAccountId = value.newrelicAccountId;
      this._newrelicLicenseKey = value.newrelicLicenseKey;
      this._newrelicRegion = value.newrelicRegion;
      this._splunkHecendpoint = value.splunkHecendpoint;
      this._splunkToken = value.splunkToken;
    }
  }

  // cloudwatch_access_key_id - computed: false, optional: true, required: false
  private _cloudwatchAccessKeyId?: string; 
  public get cloudwatchAccessKeyId() {
    return this.getStringAttribute('cloudwatch_access_key_id');
  }
  public set cloudwatchAccessKeyId(value: string) {
    this._cloudwatchAccessKeyId = value;
  }
  public resetCloudwatchAccessKeyId() {
    this._cloudwatchAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAccessKeyIdInput() {
    return this._cloudwatchAccessKeyId;
  }

  // cloudwatch_group_name - computed: true, optional: false, required: false
  public get cloudwatchGroupName() {
    return this.getStringAttribute('cloudwatch_group_name');
  }

  // cloudwatch_region - computed: false, optional: true, required: false
  private _cloudwatchRegion?: string; 
  public get cloudwatchRegion() {
    return this.getStringAttribute('cloudwatch_region');
  }
  public set cloudwatchRegion(value: string) {
    this._cloudwatchRegion = value;
  }
  public resetCloudwatchRegion() {
    this._cloudwatchRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchRegionInput() {
    return this._cloudwatchRegion;
  }

  // cloudwatch_secret_access_key - computed: false, optional: true, required: false
  private _cloudwatchSecretAccessKey?: string; 
  public get cloudwatchSecretAccessKey() {
    return this.getStringAttribute('cloudwatch_secret_access_key');
  }
  public set cloudwatchSecretAccessKey(value: string) {
    this._cloudwatchSecretAccessKey = value;
  }
  public resetCloudwatchSecretAccessKey() {
    this._cloudwatchSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchSecretAccessKeyInput() {
    return this._cloudwatchSecretAccessKey;
  }

  // cloudwatch_stream_name - computed: true, optional: false, required: false
  public get cloudwatchStreamName() {
    return this.getStringAttribute('cloudwatch_stream_name');
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

  // elasticsearch_dataset - computed: true, optional: false, required: false
  public get elasticsearchDataset() {
    return this.getStringAttribute('elasticsearch_dataset');
  }

  // elasticsearch_endpoint - computed: false, optional: true, required: false
  private _elasticsearchEndpoint?: string; 
  public get elasticsearchEndpoint() {
    return this.getStringAttribute('elasticsearch_endpoint');
  }
  public set elasticsearchEndpoint(value: string) {
    this._elasticsearchEndpoint = value;
  }
  public resetElasticsearchEndpoint() {
    this._elasticsearchEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchEndpointInput() {
    return this._elasticsearchEndpoint;
  }

  // elasticsearch_password - computed: false, optional: true, required: false
  private _elasticsearchPassword?: string; 
  public get elasticsearchPassword() {
    return this.getStringAttribute('elasticsearch_password');
  }
  public set elasticsearchPassword(value: string) {
    this._elasticsearchPassword = value;
  }
  public resetElasticsearchPassword() {
    this._elasticsearchPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchPasswordInput() {
    return this._elasticsearchPassword;
  }

  // elasticsearch_user - computed: false, optional: true, required: false
  private _elasticsearchUser?: string; 
  public get elasticsearchUser() {
    return this.getStringAttribute('elasticsearch_user');
  }
  public set elasticsearchUser(value: string) {
    this._elasticsearchUser = value;
  }
  public resetElasticsearchUser() {
    this._elasticsearchUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchUserInput() {
    return this._elasticsearchUser;
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

  // http_basic_password - computed: false, optional: true, required: false
  private _httpBasicPassword?: string; 
  public get httpBasicPassword() {
    return this.getStringAttribute('http_basic_password');
  }
  public set httpBasicPassword(value: string) {
    this._httpBasicPassword = value;
  }
  public resetHttpBasicPassword() {
    this._httpBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicPasswordInput() {
    return this._httpBasicPassword;
  }

  // http_basic_user - computed: false, optional: true, required: false
  private _httpBasicUser?: string; 
  public get httpBasicUser() {
    return this.getStringAttribute('http_basic_user');
  }
  public set httpBasicUser(value: string) {
    this._httpBasicUser = value;
  }
  public resetHttpBasicUser() {
    this._httpBasicUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicUserInput() {
    return this._httpBasicUser;
  }

  // http_bearer_token - computed: false, optional: true, required: false
  private _httpBearerToken?: string; 
  public get httpBearerToken() {
    return this.getStringAttribute('http_bearer_token');
  }
  public set httpBearerToken(value: string) {
    this._httpBearerToken = value;
  }
  public resetHttpBearerToken() {
    this._httpBearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBearerTokenInput() {
    return this._httpBearerToken;
  }

  // http_codec - computed: false, optional: true, required: false
  private _httpCodec?: string; 
  public get httpCodec() {
    return this.getStringAttribute('http_codec');
  }
  public set httpCodec(value: string) {
    this._httpCodec = value;
  }
  public resetHttpCodec() {
    this._httpCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodecInput() {
    return this._httpCodec;
  }

  // http_compression - computed: false, optional: true, required: false
  private _httpCompression?: boolean | cdktf.IResolvable; 
  public get httpCompression() {
    return this.getBooleanAttribute('http_compression');
  }
  public set httpCompression(value: boolean | cdktf.IResolvable) {
    this._httpCompression = value;
  }
  public resetHttpCompression() {
    this._httpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCompressionInput() {
    return this._httpCompression;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_payload_prefix - computed: false, optional: true, required: false
  private _httpPayloadPrefix?: string; 
  public get httpPayloadPrefix() {
    return this.getStringAttribute('http_payload_prefix');
  }
  public set httpPayloadPrefix(value: string) {
    this._httpPayloadPrefix = value;
  }
  public resetHttpPayloadPrefix() {
    this._httpPayloadPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPayloadPrefixInput() {
    return this._httpPayloadPrefix;
  }

  // http_payload_suffix - computed: false, optional: true, required: false
  private _httpPayloadSuffix?: string; 
  public get httpPayloadSuffix() {
    return this.getStringAttribute('http_payload_suffix');
  }
  public set httpPayloadSuffix(value: string) {
    this._httpPayloadSuffix = value;
  }
  public resetHttpPayloadSuffix() {
    this._httpPayloadSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPayloadSuffixInput() {
    return this._httpPayloadSuffix;
  }

  // http_uri - computed: false, optional: true, required: false
  private _httpUri?: string; 
  public get httpUri() {
    return this.getStringAttribute('http_uri');
  }
  public set httpUri(value: string) {
    this._httpUri = value;
  }
  public resetHttpUri() {
    this._httpUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriInput() {
    return this._httpUri;
  }

  // newrelic_account_id - computed: false, optional: true, required: false
  private _newrelicAccountId?: string; 
  public get newrelicAccountId() {
    return this.getStringAttribute('newrelic_account_id');
  }
  public set newrelicAccountId(value: string) {
    this._newrelicAccountId = value;
  }
  public resetNewrelicAccountId() {
    this._newrelicAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicAccountIdInput() {
    return this._newrelicAccountId;
  }

  // newrelic_license_key - computed: false, optional: true, required: false
  private _newrelicLicenseKey?: string; 
  public get newrelicLicenseKey() {
    return this.getStringAttribute('newrelic_license_key');
  }
  public set newrelicLicenseKey(value: string) {
    this._newrelicLicenseKey = value;
  }
  public resetNewrelicLicenseKey() {
    this._newrelicLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicLicenseKeyInput() {
    return this._newrelicLicenseKey;
  }

  // newrelic_region - computed: false, optional: true, required: false
  private _newrelicRegion?: string; 
  public get newrelicRegion() {
    return this.getStringAttribute('newrelic_region');
  }
  public set newrelicRegion(value: string) {
    this._newrelicRegion = value;
  }
  public resetNewrelicRegion() {
    this._newrelicRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicRegionInput() {
    return this._newrelicRegion;
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
export interface VaultClusterIpAllowlistStruct {
  /**
  * IP address range in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#address VaultCluster#address}
  */
  readonly address: string;
  /**
  * Description to help identify source (maximum 255 chars).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#description VaultCluster#description}
  */
  readonly description?: string;
}

export function vaultClusterIpAllowlistStructToTerraform(struct?: VaultClusterIpAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function vaultClusterIpAllowlistStructToHclTerraform(struct?: VaultClusterIpAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultClusterIpAllowlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VaultClusterIpAllowlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultClusterIpAllowlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._description = value.description;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class VaultClusterIpAllowlistStructList extends cdktf.ComplexList {
  public internalValue? : VaultClusterIpAllowlistStruct[] | cdktf.IResolvable

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
  public get(index: number): VaultClusterIpAllowlistStructOutputReference {
    return new VaultClusterIpAllowlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VaultClusterMajorVersionUpgradeConfig {
  /**
  * The maintenance day of the week for scheduled upgrades. Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}
  */
  readonly maintenanceWindowDay?: string;
  /**
  * The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#upgrade_type VaultCluster#upgrade_type}
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


export function vaultClusterMajorVersionUpgradeConfigToHclTerraform(struct?: VaultClusterMajorVersionUpgradeConfigOutputReference | VaultClusterMajorVersionUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window_day: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window_time: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_type: {
      value: cdktf.stringToHclTerraform(struct!.upgradeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * CloudWatch access key ID for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cloudwatch_access_key_id VaultCluster#cloudwatch_access_key_id}
  */
  readonly cloudwatchAccessKeyId?: string;
  /**
  * CloudWatch region for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cloudwatch_region VaultCluster#cloudwatch_region}
  */
  readonly cloudwatchRegion?: string;
  /**
  * CloudWatch secret access key for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#cloudwatch_secret_access_key VaultCluster#cloudwatch_secret_access_key}
  */
  readonly cloudwatchSecretAccessKey?: string;
  /**
  * Datadog api key for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * Datadog region for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}
  */
  readonly datadogRegion?: string;
  /**
  * ElasticSearch endpoint for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#elasticsearch_endpoint VaultCluster#elasticsearch_endpoint}
  */
  readonly elasticsearchEndpoint?: string;
  /**
  * ElasticSearch password for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#elasticsearch_password VaultCluster#elasticsearch_password}
  */
  readonly elasticsearchPassword?: string;
  /**
  * ElasticSearch user for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#elasticsearch_user VaultCluster#elasticsearch_user}
  */
  readonly elasticsearchUser?: string;
  /**
  * Grafana endpoint for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}
  */
  readonly grafanaEndpoint?: string;
  /**
  * Grafana password for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}
  */
  readonly grafanaPassword?: string;
  /**
  * Grafana user for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}
  */
  readonly grafanaUser?: string;
  /**
  * HTTP basic authentication password for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user is also specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_basic_password VaultCluster#http_basic_password}
  */
  readonly httpBasicPassword?: string;
  /**
  * HTTP basic authentication username for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_password is also specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_basic_user VaultCluster#http_basic_user}
  */
  readonly httpBasicUser?: string;
  /**
  * HTTP bearer authentication token for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_bearer_token VaultCluster#http_bearer_token}
  */
  readonly httpBearerToken?: string;
  /**
  * HTTP codec for streaming metrics, allowed values are JSON and NDJSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_codec VaultCluster#http_codec}
  */
  readonly httpCodec?: string;
  /**
  * HTTP compression flag for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_compression VaultCluster#http_compression}
  */
  readonly httpCompression?: boolean | cdktf.IResolvable;
  /**
  * HTTP headers for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_headers VaultCluster#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * HTTP payload method for streaming metrics, allowed values are PATCH, POST, or PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_method VaultCluster#http_method}
  */
  readonly httpMethod?: string;
  /**
  * HTTP payload prefix for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_payload_prefix VaultCluster#http_payload_prefix}
  */
  readonly httpPayloadPrefix?: string;
  /**
  * HTTP payload suffix for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_payload_suffix VaultCluster#http_payload_suffix}
  */
  readonly httpPayloadSuffix?: string;
  /**
  * HTTP URI for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#http_uri VaultCluster#http_uri}
  */
  readonly httpUri?: string;
  /**
  * NewRelic Account ID for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#newrelic_account_id VaultCluster#newrelic_account_id}
  */
  readonly newrelicAccountId?: string;
  /**
  * NewRelic license key for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#newrelic_license_key VaultCluster#newrelic_license_key}
  */
  readonly newrelicLicenseKey?: string;
  /**
  * NewRelic region for streaming metrics, allowed values are "US" and "EU"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#newrelic_region VaultCluster#newrelic_region}
  */
  readonly newrelicRegion?: string;
  /**
  * Splunk endpoint for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}
  */
  readonly splunkHecendpoint?: string;
  /**
  * Splunk token for streaming metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}
  */
  readonly splunkToken?: string;
}

export function vaultClusterMetricsConfigToTerraform(struct?: VaultClusterMetricsConfigOutputReference | VaultClusterMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_access_key_id: cdktf.stringToTerraform(struct!.cloudwatchAccessKeyId),
    cloudwatch_region: cdktf.stringToTerraform(struct!.cloudwatchRegion),
    cloudwatch_secret_access_key: cdktf.stringToTerraform(struct!.cloudwatchSecretAccessKey),
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    datadog_region: cdktf.stringToTerraform(struct!.datadogRegion),
    elasticsearch_endpoint: cdktf.stringToTerraform(struct!.elasticsearchEndpoint),
    elasticsearch_password: cdktf.stringToTerraform(struct!.elasticsearchPassword),
    elasticsearch_user: cdktf.stringToTerraform(struct!.elasticsearchUser),
    grafana_endpoint: cdktf.stringToTerraform(struct!.grafanaEndpoint),
    grafana_password: cdktf.stringToTerraform(struct!.grafanaPassword),
    grafana_user: cdktf.stringToTerraform(struct!.grafanaUser),
    http_basic_password: cdktf.stringToTerraform(struct!.httpBasicPassword),
    http_basic_user: cdktf.stringToTerraform(struct!.httpBasicUser),
    http_bearer_token: cdktf.stringToTerraform(struct!.httpBearerToken),
    http_codec: cdktf.stringToTerraform(struct!.httpCodec),
    http_compression: cdktf.booleanToTerraform(struct!.httpCompression),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_payload_prefix: cdktf.stringToTerraform(struct!.httpPayloadPrefix),
    http_payload_suffix: cdktf.stringToTerraform(struct!.httpPayloadSuffix),
    http_uri: cdktf.stringToTerraform(struct!.httpUri),
    newrelic_account_id: cdktf.stringToTerraform(struct!.newrelicAccountId),
    newrelic_license_key: cdktf.stringToTerraform(struct!.newrelicLicenseKey),
    newrelic_region: cdktf.stringToTerraform(struct!.newrelicRegion),
    splunk_hecendpoint: cdktf.stringToTerraform(struct!.splunkHecendpoint),
    splunk_token: cdktf.stringToTerraform(struct!.splunkToken),
  }
}


export function vaultClusterMetricsConfigToHclTerraform(struct?: VaultClusterMetricsConfigOutputReference | VaultClusterMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_region: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_api_key: {
      value: cdktf.stringToHclTerraform(struct!.datadogApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_region: {
      value: cdktf.stringToHclTerraform(struct!.datadogRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch_password: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch_user: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.grafanaEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_password: {
      value: cdktf.stringToHclTerraform(struct!.grafanaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_user: {
      value: cdktf.stringToHclTerraform(struct!.grafanaUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_basic_password: {
      value: cdktf.stringToHclTerraform(struct!.httpBasicPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_basic_user: {
      value: cdktf.stringToHclTerraform(struct!.httpBasicUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.httpBearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_codec: {
      value: cdktf.stringToHclTerraform(struct!.httpCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_compression: {
      value: cdktf.booleanToHclTerraform(struct!.httpCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_payload_prefix: {
      value: cdktf.stringToHclTerraform(struct!.httpPayloadPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_payload_suffix: {
      value: cdktf.stringToHclTerraform(struct!.httpPayloadSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_uri: {
      value: cdktf.stringToHclTerraform(struct!.httpUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newrelic_account_id: {
      value: cdktf.stringToHclTerraform(struct!.newrelicAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newrelic_license_key: {
      value: cdktf.stringToHclTerraform(struct!.newrelicLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newrelic_region: {
      value: cdktf.stringToHclTerraform(struct!.newrelicRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_hecendpoint: {
      value: cdktf.stringToHclTerraform(struct!.splunkHecendpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_token: {
      value: cdktf.stringToHclTerraform(struct!.splunkToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._cloudwatchAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchAccessKeyId = this._cloudwatchAccessKeyId;
    }
    if (this._cloudwatchRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchRegion = this._cloudwatchRegion;
    }
    if (this._cloudwatchSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchSecretAccessKey = this._cloudwatchSecretAccessKey;
    }
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._datadogRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogRegion = this._datadogRegion;
    }
    if (this._elasticsearchEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchEndpoint = this._elasticsearchEndpoint;
    }
    if (this._elasticsearchPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchPassword = this._elasticsearchPassword;
    }
    if (this._elasticsearchUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchUser = this._elasticsearchUser;
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
    if (this._httpBasicPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicPassword = this._httpBasicPassword;
    }
    if (this._httpBasicUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicUser = this._httpBasicUser;
    }
    if (this._httpBearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBearerToken = this._httpBearerToken;
    }
    if (this._httpCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodec = this._httpCodec;
    }
    if (this._httpCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCompression = this._httpCompression;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpPayloadPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPayloadPrefix = this._httpPayloadPrefix;
    }
    if (this._httpPayloadSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPayloadSuffix = this._httpPayloadSuffix;
    }
    if (this._httpUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUri = this._httpUri;
    }
    if (this._newrelicAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelicAccountId = this._newrelicAccountId;
    }
    if (this._newrelicLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelicLicenseKey = this._newrelicLicenseKey;
    }
    if (this._newrelicRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelicRegion = this._newrelicRegion;
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
      this._cloudwatchAccessKeyId = undefined;
      this._cloudwatchRegion = undefined;
      this._cloudwatchSecretAccessKey = undefined;
      this._datadogApiKey = undefined;
      this._datadogRegion = undefined;
      this._elasticsearchEndpoint = undefined;
      this._elasticsearchPassword = undefined;
      this._elasticsearchUser = undefined;
      this._grafanaEndpoint = undefined;
      this._grafanaPassword = undefined;
      this._grafanaUser = undefined;
      this._httpBasicPassword = undefined;
      this._httpBasicUser = undefined;
      this._httpBearerToken = undefined;
      this._httpCodec = undefined;
      this._httpCompression = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpPayloadPrefix = undefined;
      this._httpPayloadSuffix = undefined;
      this._httpUri = undefined;
      this._newrelicAccountId = undefined;
      this._newrelicLicenseKey = undefined;
      this._newrelicRegion = undefined;
      this._splunkHecendpoint = undefined;
      this._splunkToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchAccessKeyId = value.cloudwatchAccessKeyId;
      this._cloudwatchRegion = value.cloudwatchRegion;
      this._cloudwatchSecretAccessKey = value.cloudwatchSecretAccessKey;
      this._datadogApiKey = value.datadogApiKey;
      this._datadogRegion = value.datadogRegion;
      this._elasticsearchEndpoint = value.elasticsearchEndpoint;
      this._elasticsearchPassword = value.elasticsearchPassword;
      this._elasticsearchUser = value.elasticsearchUser;
      this._grafanaEndpoint = value.grafanaEndpoint;
      this._grafanaPassword = value.grafanaPassword;
      this._grafanaUser = value.grafanaUser;
      this._httpBasicPassword = value.httpBasicPassword;
      this._httpBasicUser = value.httpBasicUser;
      this._httpBearerToken = value.httpBearerToken;
      this._httpCodec = value.httpCodec;
      this._httpCompression = value.httpCompression;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpPayloadPrefix = value.httpPayloadPrefix;
      this._httpPayloadSuffix = value.httpPayloadSuffix;
      this._httpUri = value.httpUri;
      this._newrelicAccountId = value.newrelicAccountId;
      this._newrelicLicenseKey = value.newrelicLicenseKey;
      this._newrelicRegion = value.newrelicRegion;
      this._splunkHecendpoint = value.splunkHecendpoint;
      this._splunkToken = value.splunkToken;
    }
  }

  // cloudwatch_access_key_id - computed: false, optional: true, required: false
  private _cloudwatchAccessKeyId?: string; 
  public get cloudwatchAccessKeyId() {
    return this.getStringAttribute('cloudwatch_access_key_id');
  }
  public set cloudwatchAccessKeyId(value: string) {
    this._cloudwatchAccessKeyId = value;
  }
  public resetCloudwatchAccessKeyId() {
    this._cloudwatchAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAccessKeyIdInput() {
    return this._cloudwatchAccessKeyId;
  }

  // cloudwatch_namespace - computed: true, optional: false, required: false
  public get cloudwatchNamespace() {
    return this.getStringAttribute('cloudwatch_namespace');
  }

  // cloudwatch_region - computed: false, optional: true, required: false
  private _cloudwatchRegion?: string; 
  public get cloudwatchRegion() {
    return this.getStringAttribute('cloudwatch_region');
  }
  public set cloudwatchRegion(value: string) {
    this._cloudwatchRegion = value;
  }
  public resetCloudwatchRegion() {
    this._cloudwatchRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchRegionInput() {
    return this._cloudwatchRegion;
  }

  // cloudwatch_secret_access_key - computed: false, optional: true, required: false
  private _cloudwatchSecretAccessKey?: string; 
  public get cloudwatchSecretAccessKey() {
    return this.getStringAttribute('cloudwatch_secret_access_key');
  }
  public set cloudwatchSecretAccessKey(value: string) {
    this._cloudwatchSecretAccessKey = value;
  }
  public resetCloudwatchSecretAccessKey() {
    this._cloudwatchSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchSecretAccessKeyInput() {
    return this._cloudwatchSecretAccessKey;
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

  // elasticsearch_dataset - computed: true, optional: false, required: false
  public get elasticsearchDataset() {
    return this.getStringAttribute('elasticsearch_dataset');
  }

  // elasticsearch_endpoint - computed: false, optional: true, required: false
  private _elasticsearchEndpoint?: string; 
  public get elasticsearchEndpoint() {
    return this.getStringAttribute('elasticsearch_endpoint');
  }
  public set elasticsearchEndpoint(value: string) {
    this._elasticsearchEndpoint = value;
  }
  public resetElasticsearchEndpoint() {
    this._elasticsearchEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchEndpointInput() {
    return this._elasticsearchEndpoint;
  }

  // elasticsearch_password - computed: false, optional: true, required: false
  private _elasticsearchPassword?: string; 
  public get elasticsearchPassword() {
    return this.getStringAttribute('elasticsearch_password');
  }
  public set elasticsearchPassword(value: string) {
    this._elasticsearchPassword = value;
  }
  public resetElasticsearchPassword() {
    this._elasticsearchPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchPasswordInput() {
    return this._elasticsearchPassword;
  }

  // elasticsearch_user - computed: false, optional: true, required: false
  private _elasticsearchUser?: string; 
  public get elasticsearchUser() {
    return this.getStringAttribute('elasticsearch_user');
  }
  public set elasticsearchUser(value: string) {
    this._elasticsearchUser = value;
  }
  public resetElasticsearchUser() {
    this._elasticsearchUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchUserInput() {
    return this._elasticsearchUser;
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

  // http_basic_password - computed: false, optional: true, required: false
  private _httpBasicPassword?: string; 
  public get httpBasicPassword() {
    return this.getStringAttribute('http_basic_password');
  }
  public set httpBasicPassword(value: string) {
    this._httpBasicPassword = value;
  }
  public resetHttpBasicPassword() {
    this._httpBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicPasswordInput() {
    return this._httpBasicPassword;
  }

  // http_basic_user - computed: false, optional: true, required: false
  private _httpBasicUser?: string; 
  public get httpBasicUser() {
    return this.getStringAttribute('http_basic_user');
  }
  public set httpBasicUser(value: string) {
    this._httpBasicUser = value;
  }
  public resetHttpBasicUser() {
    this._httpBasicUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicUserInput() {
    return this._httpBasicUser;
  }

  // http_bearer_token - computed: false, optional: true, required: false
  private _httpBearerToken?: string; 
  public get httpBearerToken() {
    return this.getStringAttribute('http_bearer_token');
  }
  public set httpBearerToken(value: string) {
    this._httpBearerToken = value;
  }
  public resetHttpBearerToken() {
    this._httpBearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBearerTokenInput() {
    return this._httpBearerToken;
  }

  // http_codec - computed: false, optional: true, required: false
  private _httpCodec?: string; 
  public get httpCodec() {
    return this.getStringAttribute('http_codec');
  }
  public set httpCodec(value: string) {
    this._httpCodec = value;
  }
  public resetHttpCodec() {
    this._httpCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodecInput() {
    return this._httpCodec;
  }

  // http_compression - computed: false, optional: true, required: false
  private _httpCompression?: boolean | cdktf.IResolvable; 
  public get httpCompression() {
    return this.getBooleanAttribute('http_compression');
  }
  public set httpCompression(value: boolean | cdktf.IResolvable) {
    this._httpCompression = value;
  }
  public resetHttpCompression() {
    this._httpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCompressionInput() {
    return this._httpCompression;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_payload_prefix - computed: false, optional: true, required: false
  private _httpPayloadPrefix?: string; 
  public get httpPayloadPrefix() {
    return this.getStringAttribute('http_payload_prefix');
  }
  public set httpPayloadPrefix(value: string) {
    this._httpPayloadPrefix = value;
  }
  public resetHttpPayloadPrefix() {
    this._httpPayloadPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPayloadPrefixInput() {
    return this._httpPayloadPrefix;
  }

  // http_payload_suffix - computed: false, optional: true, required: false
  private _httpPayloadSuffix?: string; 
  public get httpPayloadSuffix() {
    return this.getStringAttribute('http_payload_suffix');
  }
  public set httpPayloadSuffix(value: string) {
    this._httpPayloadSuffix = value;
  }
  public resetHttpPayloadSuffix() {
    this._httpPayloadSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPayloadSuffixInput() {
    return this._httpPayloadSuffix;
  }

  // http_uri - computed: false, optional: true, required: false
  private _httpUri?: string; 
  public get httpUri() {
    return this.getStringAttribute('http_uri');
  }
  public set httpUri(value: string) {
    this._httpUri = value;
  }
  public resetHttpUri() {
    this._httpUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUriInput() {
    return this._httpUri;
  }

  // newrelic_account_id - computed: false, optional: true, required: false
  private _newrelicAccountId?: string; 
  public get newrelicAccountId() {
    return this.getStringAttribute('newrelic_account_id');
  }
  public set newrelicAccountId(value: string) {
    this._newrelicAccountId = value;
  }
  public resetNewrelicAccountId() {
    this._newrelicAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicAccountIdInput() {
    return this._newrelicAccountId;
  }

  // newrelic_license_key - computed: false, optional: true, required: false
  private _newrelicLicenseKey?: string; 
  public get newrelicLicenseKey() {
    return this.getStringAttribute('newrelic_license_key');
  }
  public set newrelicLicenseKey(value: string) {
    this._newrelicLicenseKey = value;
  }
  public resetNewrelicLicenseKey() {
    this._newrelicLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicLicenseKeyInput() {
    return this._newrelicLicenseKey;
  }

  // newrelic_region - computed: false, optional: true, required: false
  private _newrelicRegion?: string; 
  public get newrelicRegion() {
    return this.getStringAttribute('newrelic_region');
  }
  public set newrelicRegion(value: string) {
    this._newrelicRegion = value;
  }
  public resetNewrelicRegion() {
    this._newrelicRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicRegionInput() {
    return this._newrelicRegion;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#create VaultCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#default VaultCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#delete VaultCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#update VaultCluster#update}
  */
  readonly update?: string;
}

export function vaultClusterTimeoutsToTerraform(struct?: VaultClusterTimeouts | cdktf.IResolvable): any {
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


export function vaultClusterTimeoutsToHclTerraform(struct?: VaultClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster hcp_vault_cluster}
*/
export class VaultCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultCluster to import
  * @param importFromId The id of the existing VaultCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/vault_cluster hcp_vault_cluster} Resource
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
        providerVersion: '0.88.0',
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
    this._projectId = config.projectId;
    this._proxyEndpoint = config.proxyEndpoint;
    this._publicEndpoint = config.publicEndpoint;
    this._tier = config.tier;
    this._auditLogConfig.internalValue = config.auditLogConfig;
    this._ipAllowlist.internalValue = config.ipAllowlist;
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

  // proxy_endpoint - computed: false, optional: true, required: false
  private _proxyEndpoint?: string; 
  public get proxyEndpoint() {
    return this.getStringAttribute('proxy_endpoint');
  }
  public set proxyEndpoint(value: string) {
    this._proxyEndpoint = value;
  }
  public resetProxyEndpoint() {
    this._proxyEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEndpointInput() {
    return this._proxyEndpoint;
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

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist = new VaultClusterIpAllowlistStructList(this, "ip_allowlist", false);
  public get ipAllowlist() {
    return this._ipAllowlist;
  }
  public putIpAllowlist(value: VaultClusterIpAllowlistStruct[] | cdktf.IResolvable) {
    this._ipAllowlist.internalValue = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist.internalValue;
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
      project_id: cdktf.stringToTerraform(this._projectId),
      proxy_endpoint: cdktf.stringToTerraform(this._proxyEndpoint),
      public_endpoint: cdktf.booleanToTerraform(this._publicEndpoint),
      tier: cdktf.stringToTerraform(this._tier),
      audit_log_config: vaultClusterAuditLogConfigToTerraform(this._auditLogConfig.internalValue),
      ip_allowlist: cdktf.listMapper(vaultClusterIpAllowlistStructToTerraform, true)(this._ipAllowlist.internalValue),
      major_version_upgrade_config: vaultClusterMajorVersionUpgradeConfigToTerraform(this._majorVersionUpgradeConfig.internalValue),
      metrics_config: vaultClusterMetricsConfigToTerraform(this._metricsConfig.internalValue),
      timeouts: vaultClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      hvn_id: {
        value: cdktf.stringToHclTerraform(this._hvnId),
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
      min_vault_version: {
        value: cdktf.stringToHclTerraform(this._minVaultVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paths_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pathsFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      primary_link: {
        value: cdktf.stringToHclTerraform(this._primaryLink),
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
      proxy_endpoint: {
        value: cdktf.stringToHclTerraform(this._proxyEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_endpoint: {
        value: cdktf.booleanToHclTerraform(this._publicEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_log_config: {
        value: vaultClusterAuditLogConfigToHclTerraform(this._auditLogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultClusterAuditLogConfigList",
      },
      ip_allowlist: {
        value: cdktf.listMapperHcl(vaultClusterIpAllowlistStructToHclTerraform, true)(this._ipAllowlist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultClusterIpAllowlistStructList",
      },
      major_version_upgrade_config: {
        value: vaultClusterMajorVersionUpgradeConfigToHclTerraform(this._majorVersionUpgradeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultClusterMajorVersionUpgradeConfigList",
      },
      metrics_config: {
        value: vaultClusterMetricsConfigToHclTerraform(this._metricsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VaultClusterMetricsConfigList",
      },
      timeouts: {
        value: vaultClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
