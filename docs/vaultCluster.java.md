# `hcp_vault_cluster`

Refer to the Terraform Registory for docs: [`hcp_vault_cluster`](https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster).

# `vaultCluster` Submodule <a name="`vaultCluster` Submodule" id="@cdktf/provider-hcp.vaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultCluster <a name="VaultCluster" id="@cdktf/provider-hcp.vaultCluster.VaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultCluster;

VaultCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .hvnId(java.lang.String)
//  .auditLogConfig(VaultClusterAuditLogConfig)
//  .id(java.lang.String)
//  .majorVersionUpgradeConfig(VaultClusterMajorVersionUpgradeConfig)
//  .metricsConfig(VaultClusterMetricsConfig)
//  .minVaultVersion(java.lang.String)
//  .pathsFilter(java.util.List<java.lang.String>)
//  .primaryLink(java.lang.String)
//  .projectId(java.lang.String)
//  .publicEndpoint(java.lang.Boolean)
//  .publicEndpoint(IResolvable)
//  .tier(java.lang.String)
//  .timeouts(VaultClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.hvnId">hvnId</a></code> | <code>java.lang.String</code> | The ID of the HVN this HCP Vault cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.majorVersionUpgradeConfig">majorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.minVaultVersion">minVaultVersion</a></code> | <code>java.lang.String</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.pathsFilter">pathsFilter</a></code> | <code>java.util.List<java.lang.String></code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes that the cluster has a public endpoint. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Tier of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.hvnId"></a>

- *Type:* java.lang.String

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `auditLogConfig`<sup>Optional</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.auditLogConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `majorVersionUpgradeConfig`<sup>Optional</sup> <a name="majorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.majorVersionUpgradeConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.metricsConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `minVaultVersion`<sup>Optional</sup> <a name="minVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.minVaultVersion"></a>

- *Type:* java.lang.String

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `pathsFilter`<sup>Optional</sup> <a name="pathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.pathsFilter"></a>

- *Type:* java.util.List<java.lang.String>

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `primaryLink`<sup>Optional</sup> <a name="primaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.primaryLink"></a>

- *Type:* java.lang.String

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Vault cluster is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#project_id VaultCluster#project_id}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.publicEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://www.hashicorp.com/products/vault/pricing). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#tier VaultCluster#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#timeouts VaultCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig">putAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig">putMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig">putMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig">resetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig">resetMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion">resetMinVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter">resetPathsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink">resetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint">resetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuditLogConfig` <a name="putAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig"></a>

```java
public void putAuditLogConfig(VaultClusterAuditLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `putMajorVersionUpgradeConfig` <a name="putMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig"></a>

```java
public void putMajorVersionUpgradeConfig(VaultClusterMajorVersionUpgradeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `putMetricsConfig` <a name="putMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig"></a>

```java
public void putMetricsConfig(VaultClusterMetricsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts"></a>

```java
public void putTimeouts(VaultClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

---

##### `resetAuditLogConfig` <a name="resetAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig"></a>

```java
public void resetAuditLogConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMajorVersionUpgradeConfig` <a name="resetMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig"></a>

```java
public void resetMajorVersionUpgradeConfig()
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig"></a>

```java
public void resetMetricsConfig()
```

##### `resetMinVaultVersion` <a name="resetMinVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion"></a>

```java
public void resetMinVaultVersion()
```

##### `resetPathsFilter` <a name="resetPathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter"></a>

```java
public void resetPathsFilter()
```

##### `resetPrimaryLink` <a name="resetPrimaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink"></a>

```java
public void resetPrimaryLink()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetPublicEndpoint` <a name="resetPublicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint"></a>

```java
public void resetPublicEndpoint()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultCluster;

VaultCluster.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultCluster;

VaultCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultCluster;

VaultCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig">majorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl">vaultPrivateEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl">vaultPublicEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion">vaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput">auditLogConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput">hvnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput">majorVersionUpgradeConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput">metricsConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput">minVaultVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput">pathsFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput">primaryLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput">publicEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion">minVaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter">pathsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig"></a>

```java
public VaultClusterAuditLogConfigOutputReference getAuditLogConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `majorVersionUpgradeConfig`<sup>Required</sup> <a name="majorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig"></a>

```java
public VaultClusterMajorVersionUpgradeConfigOutputReference getMajorVersionUpgradeConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a>

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig"></a>

```java
public VaultClusterMetricsConfigOutputReference getMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts"></a>

```java
public VaultClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a>

---

##### `vaultPrivateEndpointUrl`<sup>Required</sup> <a name="vaultPrivateEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl"></a>

```java
public java.lang.String getVaultPrivateEndpointUrl();
```

- *Type:* java.lang.String

---

##### `vaultPublicEndpointUrl`<sup>Required</sup> <a name="vaultPublicEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl"></a>

```java
public java.lang.String getVaultPublicEndpointUrl();
```

- *Type:* java.lang.String

---

##### `vaultVersion`<sup>Required</sup> <a name="vaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion"></a>

```java
public java.lang.String getVaultVersion();
```

- *Type:* java.lang.String

---

##### `auditLogConfigInput`<sup>Optional</sup> <a name="auditLogConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput"></a>

```java
public VaultClusterAuditLogConfig getAuditLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput"></a>

```java
public java.lang.String getHvnIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `majorVersionUpgradeConfigInput`<sup>Optional</sup> <a name="majorVersionUpgradeConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput"></a>

```java
public VaultClusterMajorVersionUpgradeConfig getMajorVersionUpgradeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput"></a>

```java
public VaultClusterMetricsConfig getMetricsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `minVaultVersionInput`<sup>Optional</sup> <a name="minVaultVersionInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput"></a>

```java
public java.lang.String getMinVaultVersionInput();
```

- *Type:* java.lang.String

---

##### `pathsFilterInput`<sup>Optional</sup> <a name="pathsFilterInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput"></a>

```java
public java.util.List<java.lang.String> getPathsFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryLinkInput`<sup>Optional</sup> <a name="primaryLinkInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput"></a>

```java
public java.lang.String getPrimaryLinkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `publicEndpointInput`<sup>Optional</sup> <a name="publicEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput"></a>

```java
public java.lang.Object getPublicEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minVaultVersion`<sup>Required</sup> <a name="minVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion"></a>

```java
public java.lang.String getMinVaultVersion();
```

- *Type:* java.lang.String

---

##### `pathsFilter`<sup>Required</sup> <a name="pathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter"></a>

```java
public java.util.List<java.lang.String> getPathsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryLink`<sup>Required</sup> <a name="primaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink"></a>

```java
public java.lang.String getPrimaryLink();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint"></a>

```java
public java.lang.Object getPublicEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VaultClusterAuditLogConfig <a name="VaultClusterAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterAuditLogConfig;

VaultClusterAuditLogConfig.builder()
//  .datadogApiKey(java.lang.String)
//  .datadogRegion(java.lang.String)
//  .grafanaEndpoint(java.lang.String)
//  .grafanaPassword(java.lang.String)
//  .grafanaUser(java.lang.String)
//  .splunkHecendpoint(java.lang.String)
//  .splunkToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | Datadog api key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | Datadog region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>java.lang.String</code> | Grafana endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword">grafanaPassword</a></code> | <code>java.lang.String</code> | Grafana password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser">grafanaUser</a></code> | <code>java.lang.String</code> | Grafana user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>java.lang.String</code> | Splunk endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken">splunkToken</a></code> | <code>java.lang.String</code> | Splunk token for streaming audit logs. |

---

##### `datadogApiKey`<sup>Optional</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

Datadog api key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `datadogRegion`<sup>Optional</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

Datadog region for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `grafanaEndpoint`<sup>Optional</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint"></a>

```java
public java.lang.String getGrafanaEndpoint();
```

- *Type:* java.lang.String

Grafana endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `grafanaPassword`<sup>Optional</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword"></a>

```java
public java.lang.String getGrafanaPassword();
```

- *Type:* java.lang.String

Grafana password for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `grafanaUser`<sup>Optional</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser"></a>

```java
public java.lang.String getGrafanaUser();
```

- *Type:* java.lang.String

Grafana user for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `splunkHecendpoint`<sup>Optional</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint"></a>

```java
public java.lang.String getSplunkHecendpoint();
```

- *Type:* java.lang.String

Splunk endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `splunkToken`<sup>Optional</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken"></a>

```java
public java.lang.String getSplunkToken();
```

- *Type:* java.lang.String

Splunk token for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterConfig <a name="VaultClusterConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterConfig;

VaultClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .hvnId(java.lang.String)
//  .auditLogConfig(VaultClusterAuditLogConfig)
//  .id(java.lang.String)
//  .majorVersionUpgradeConfig(VaultClusterMajorVersionUpgradeConfig)
//  .metricsConfig(VaultClusterMetricsConfig)
//  .minVaultVersion(java.lang.String)
//  .pathsFilter(java.util.List<java.lang.String>)
//  .primaryLink(java.lang.String)
//  .projectId(java.lang.String)
//  .publicEndpoint(java.lang.Boolean)
//  .publicEndpoint(IResolvable)
//  .tier(java.lang.String)
//  .timeouts(VaultClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId">hvnId</a></code> | <code>java.lang.String</code> | The ID of the HVN this HCP Vault cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig">majorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion">minVaultVersion</a></code> | <code>java.lang.String</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter">pathsFilter</a></code> | <code>java.util.List<java.lang.String></code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink">primaryLink</a></code> | <code>java.lang.String</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint">publicEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes that the cluster has a public endpoint. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Tier of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId"></a>

```java
public java.lang.String getHvnId();
```

- *Type:* java.lang.String

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `auditLogConfig`<sup>Optional</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig"></a>

```java
public VaultClusterAuditLogConfig getAuditLogConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `majorVersionUpgradeConfig`<sup>Optional</sup> <a name="majorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig"></a>

```java
public VaultClusterMajorVersionUpgradeConfig getMajorVersionUpgradeConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig"></a>

```java
public VaultClusterMetricsConfig getMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `minVaultVersion`<sup>Optional</sup> <a name="minVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion"></a>

```java
public java.lang.String getMinVaultVersion();
```

- *Type:* java.lang.String

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `pathsFilter`<sup>Optional</sup> <a name="pathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter"></a>

```java
public java.util.List<java.lang.String> getPathsFilter();
```

- *Type:* java.util.List<java.lang.String>

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `primaryLink`<sup>Optional</sup> <a name="primaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink"></a>

```java
public java.lang.String getPrimaryLink();
```

- *Type:* java.lang.String

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Vault cluster is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#project_id VaultCluster#project_id}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint"></a>

```java
public java.lang.Object getPublicEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://www.hashicorp.com/products/vault/pricing). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#tier VaultCluster#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts"></a>

```java
public VaultClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#timeouts VaultCluster#timeouts}

---

### VaultClusterMajorVersionUpgradeConfig <a name="VaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterMajorVersionUpgradeConfig;

VaultClusterMajorVersionUpgradeConfig.builder()
    .upgradeType(java.lang.String)
//  .maintenanceWindowDay(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType">upgradeType</a></code> | <code>java.lang.String</code> | The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay">maintenanceWindowDay</a></code> | <code>java.lang.String</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`. |

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType"></a>

```java
public java.lang.String getUpgradeType();
```

- *Type:* java.lang.String

The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#upgrade_type VaultCluster#upgrade_type}

---

##### `maintenanceWindowDay`<sup>Optional</sup> <a name="maintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay"></a>

```java
public java.lang.String getMaintenanceWindowDay();
```

- *Type:* java.lang.String

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}

---

### VaultClusterMetricsConfig <a name="VaultClusterMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterMetricsConfig;

VaultClusterMetricsConfig.builder()
//  .datadogApiKey(java.lang.String)
//  .datadogRegion(java.lang.String)
//  .grafanaEndpoint(java.lang.String)
//  .grafanaPassword(java.lang.String)
//  .grafanaUser(java.lang.String)
//  .splunkHecendpoint(java.lang.String)
//  .splunkToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | Datadog api key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | Datadog region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>java.lang.String</code> | Grafana endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword">grafanaPassword</a></code> | <code>java.lang.String</code> | Grafana password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser">grafanaUser</a></code> | <code>java.lang.String</code> | Grafana user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>java.lang.String</code> | Splunk endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken">splunkToken</a></code> | <code>java.lang.String</code> | Splunk token for streaming metrics. |

---

##### `datadogApiKey`<sup>Optional</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

Datadog api key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `datadogRegion`<sup>Optional</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

Datadog region for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `grafanaEndpoint`<sup>Optional</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint"></a>

```java
public java.lang.String getGrafanaEndpoint();
```

- *Type:* java.lang.String

Grafana endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `grafanaPassword`<sup>Optional</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword"></a>

```java
public java.lang.String getGrafanaPassword();
```

- *Type:* java.lang.String

Grafana password for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `grafanaUser`<sup>Optional</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser"></a>

```java
public java.lang.String getGrafanaUser();
```

- *Type:* java.lang.String

Grafana user for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `splunkHecendpoint`<sup>Optional</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint"></a>

```java
public java.lang.String getSplunkHecendpoint();
```

- *Type:* java.lang.String

Splunk endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `splunkToken`<sup>Optional</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken"></a>

```java
public java.lang.String getSplunkToken();
```

- *Type:* java.lang.String

Splunk token for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterTimeouts <a name="VaultClusterTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterTimeouts;

VaultClusterTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#create VaultCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#default VaultCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#delete VaultCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#update VaultCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#create VaultCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#default VaultCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#delete VaultCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/resources/vault_cluster#update VaultCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultClusterAuditLogConfigOutputReference <a name="VaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterAuditLogConfigOutputReference;

new VaultClusterAuditLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey">resetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion">resetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint">resetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword">resetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser">resetGrafanaUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint">resetSplunkHecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken">resetSplunkToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatadogApiKey` <a name="resetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey"></a>

```java
public void resetDatadogApiKey()
```

##### `resetDatadogRegion` <a name="resetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion"></a>

```java
public void resetDatadogRegion()
```

##### `resetGrafanaEndpoint` <a name="resetGrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint"></a>

```java
public void resetGrafanaEndpoint()
```

##### `resetGrafanaPassword` <a name="resetGrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword"></a>

```java
public void resetGrafanaPassword()
```

##### `resetGrafanaUser` <a name="resetGrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser"></a>

```java
public void resetGrafanaUser()
```

##### `resetSplunkHecendpoint` <a name="resetSplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint"></a>

```java
public void resetSplunkHecendpoint()
```

##### `resetSplunkToken` <a name="resetSplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken"></a>

```java
public void resetSplunkToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput">datadogApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput">datadogRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput">grafanaEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput">grafanaPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput">grafanaUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput">splunkHecendpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput">splunkTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword">grafanaPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser">grafanaUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken">splunkToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datadogApiKeyInput`<sup>Optional</sup> <a name="datadogApiKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput"></a>

```java
public java.lang.String getDatadogApiKeyInput();
```

- *Type:* java.lang.String

---

##### `datadogRegionInput`<sup>Optional</sup> <a name="datadogRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput"></a>

```java
public java.lang.String getDatadogRegionInput();
```

- *Type:* java.lang.String

---

##### `grafanaEndpointInput`<sup>Optional</sup> <a name="grafanaEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput"></a>

```java
public java.lang.String getGrafanaEndpointInput();
```

- *Type:* java.lang.String

---

##### `grafanaPasswordInput`<sup>Optional</sup> <a name="grafanaPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput"></a>

```java
public java.lang.String getGrafanaPasswordInput();
```

- *Type:* java.lang.String

---

##### `grafanaUserInput`<sup>Optional</sup> <a name="grafanaUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput"></a>

```java
public java.lang.String getGrafanaUserInput();
```

- *Type:* java.lang.String

---

##### `splunkHecendpointInput`<sup>Optional</sup> <a name="splunkHecendpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput"></a>

```java
public java.lang.String getSplunkHecendpointInput();
```

- *Type:* java.lang.String

---

##### `splunkTokenInput`<sup>Optional</sup> <a name="splunkTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput"></a>

```java
public java.lang.String getSplunkTokenInput();
```

- *Type:* java.lang.String

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

---

##### `grafanaEndpoint`<sup>Required</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```java
public java.lang.String getGrafanaEndpoint();
```

- *Type:* java.lang.String

---

##### `grafanaPassword`<sup>Required</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword"></a>

```java
public java.lang.String getGrafanaPassword();
```

- *Type:* java.lang.String

---

##### `grafanaUser`<sup>Required</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```java
public java.lang.String getGrafanaUser();
```

- *Type:* java.lang.String

---

##### `splunkHecendpoint`<sup>Required</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```java
public java.lang.String getSplunkHecendpoint();
```

- *Type:* java.lang.String

---

##### `splunkToken`<sup>Required</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken"></a>

```java
public java.lang.String getSplunkToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```java
public VaultClusterAuditLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---


### VaultClusterMajorVersionUpgradeConfigOutputReference <a name="VaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterMajorVersionUpgradeConfigOutputReference;

new VaultClusterMajorVersionUpgradeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay">resetMaintenanceWindowDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindowDay` <a name="resetMaintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay"></a>

```java
public void resetMaintenanceWindowDay()
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime"></a>

```java
public void resetMaintenanceWindowTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput">maintenanceWindowDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput">upgradeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">maintenanceWindowDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">upgradeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDayInput`<sup>Optional</sup> <a name="maintenanceWindowDayInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput"></a>

```java
public java.lang.String getMaintenanceWindowDayInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput"></a>

```java
public java.lang.String getMaintenanceWindowTimeInput();
```

- *Type:* java.lang.String

---

##### `upgradeTypeInput`<sup>Optional</sup> <a name="upgradeTypeInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput"></a>

```java
public java.lang.String getUpgradeTypeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDay`<sup>Required</sup> <a name="maintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```java
public java.lang.String getMaintenanceWindowDay();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```java
public java.lang.String getUpgradeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```java
public VaultClusterMajorVersionUpgradeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---


### VaultClusterMetricsConfigOutputReference <a name="VaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterMetricsConfigOutputReference;

new VaultClusterMetricsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey">resetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion">resetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint">resetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword">resetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser">resetGrafanaUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint">resetSplunkHecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken">resetSplunkToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatadogApiKey` <a name="resetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey"></a>

```java
public void resetDatadogApiKey()
```

##### `resetDatadogRegion` <a name="resetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion"></a>

```java
public void resetDatadogRegion()
```

##### `resetGrafanaEndpoint` <a name="resetGrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint"></a>

```java
public void resetGrafanaEndpoint()
```

##### `resetGrafanaPassword` <a name="resetGrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword"></a>

```java
public void resetGrafanaPassword()
```

##### `resetGrafanaUser` <a name="resetGrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser"></a>

```java
public void resetGrafanaUser()
```

##### `resetSplunkHecendpoint` <a name="resetSplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint"></a>

```java
public void resetSplunkHecendpoint()
```

##### `resetSplunkToken` <a name="resetSplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken"></a>

```java
public void resetSplunkToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput">datadogApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput">datadogRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput">grafanaEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput">grafanaPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput">grafanaUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput">splunkHecendpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput">splunkTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword">grafanaPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser">grafanaUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken">splunkToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datadogApiKeyInput`<sup>Optional</sup> <a name="datadogApiKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput"></a>

```java
public java.lang.String getDatadogApiKeyInput();
```

- *Type:* java.lang.String

---

##### `datadogRegionInput`<sup>Optional</sup> <a name="datadogRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput"></a>

```java
public java.lang.String getDatadogRegionInput();
```

- *Type:* java.lang.String

---

##### `grafanaEndpointInput`<sup>Optional</sup> <a name="grafanaEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput"></a>

```java
public java.lang.String getGrafanaEndpointInput();
```

- *Type:* java.lang.String

---

##### `grafanaPasswordInput`<sup>Optional</sup> <a name="grafanaPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput"></a>

```java
public java.lang.String getGrafanaPasswordInput();
```

- *Type:* java.lang.String

---

##### `grafanaUserInput`<sup>Optional</sup> <a name="grafanaUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput"></a>

```java
public java.lang.String getGrafanaUserInput();
```

- *Type:* java.lang.String

---

##### `splunkHecendpointInput`<sup>Optional</sup> <a name="splunkHecendpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput"></a>

```java
public java.lang.String getSplunkHecendpointInput();
```

- *Type:* java.lang.String

---

##### `splunkTokenInput`<sup>Optional</sup> <a name="splunkTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput"></a>

```java
public java.lang.String getSplunkTokenInput();
```

- *Type:* java.lang.String

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

---

##### `grafanaEndpoint`<sup>Required</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```java
public java.lang.String getGrafanaEndpoint();
```

- *Type:* java.lang.String

---

##### `grafanaPassword`<sup>Required</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword"></a>

```java
public java.lang.String getGrafanaPassword();
```

- *Type:* java.lang.String

---

##### `grafanaUser`<sup>Required</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```java
public java.lang.String getGrafanaUser();
```

- *Type:* java.lang.String

---

##### `splunkHecendpoint`<sup>Required</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```java
public java.lang.String getSplunkHecendpoint();
```

- *Type:* java.lang.String

---

##### `splunkToken`<sup>Required</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken"></a>

```java
public java.lang.String getSplunkToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```java
public VaultClusterMetricsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---


### VaultClusterTimeoutsOutputReference <a name="VaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.vault_cluster.VaultClusterTimeoutsOutputReference;

new VaultClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



