# `vaultCluster` Submodule <a name="`vaultCluster` Submodule" id="@cdktf/provider-hcp.vaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultCluster <a name="VaultCluster" id="@cdktf/provider-hcp.vaultCluster.VaultCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  hvn_id: str,
  audit_log_config: VaultClusterAuditLogConfig = None,
  id: str = None,
  major_version_upgrade_config: VaultClusterMajorVersionUpgradeConfig = None,
  metrics_config: VaultClusterMetricsConfig = None,
  min_vault_version: str = None,
  paths_filter: typing.List[str] = None,
  primary_link: str = None,
  public_endpoint: typing.Union[bool, IResolvable] = None,
  tier: str = None,
  timeouts: VaultClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN this HCP Vault cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.auditLogConfig">audit_log_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.majorVersionUpgradeConfig">major_version_upgrade_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.minVaultVersion">min_vault_version</a></code> | <code>str</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.pathsFilter">paths_filter</a></code> | <code>typing.List[str]</code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.primaryLink">primary_link</a></code> | <code>str</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.publicEndpoint">public_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the cluster has a public endpoint. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Tier of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `audit_log_config`<sup>Optional</sup> <a name="audit_log_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.auditLogConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `major_version_upgrade_config`<sup>Optional</sup> <a name="major_version_upgrade_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.majorVersionUpgradeConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.metricsConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `min_vault_version`<sup>Optional</sup> <a name="min_vault_version" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.minVaultVersion"></a>

- *Type:* str

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `paths_filter`<sup>Optional</sup> <a name="paths_filter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.pathsFilter"></a>

- *Type:* typing.List[str]

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `primary_link`<sup>Optional</sup> <a name="primary_link" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.primaryLink"></a>

- *Type:* str

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `public_endpoint`<sup>Optional</sup> <a name="public_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.publicEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.tier"></a>

- *Type:* str

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://cloud.hashicorp.com/pricing/vault). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#tier VaultCluster#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#timeouts VaultCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig">put_audit_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig">put_major_version_upgrade_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig">put_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig">reset_audit_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig">reset_major_version_upgrade_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig">reset_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion">reset_min_vault_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter">reset_paths_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink">reset_primary_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint">reset_public_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_audit_log_config` <a name="put_audit_log_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig"></a>

```python
def put_audit_log_config(
  datadog_api_key: str = None,
  datadog_region: str = None,
  grafana_endpoint: str = None,
  grafana_password: str = None,
  grafana_user: str = None,
  splunk_hecendpoint: str = None,
  splunk_token: str = None
) -> None
```

###### `datadog_api_key`<sup>Optional</sup> <a name="datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.datadogApiKey"></a>

- *Type:* str

Datadog api key for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

###### `datadog_region`<sup>Optional</sup> <a name="datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.datadogRegion"></a>

- *Type:* str

Datadog region for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_region VaultCluster#datadog_region}

---

###### `grafana_endpoint`<sup>Optional</sup> <a name="grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.grafanaEndpoint"></a>

- *Type:* str

Grafana endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

###### `grafana_password`<sup>Optional</sup> <a name="grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.grafanaPassword"></a>

- *Type:* str

Grafana password for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_password VaultCluster#grafana_password}

---

###### `grafana_user`<sup>Optional</sup> <a name="grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.grafanaUser"></a>

- *Type:* str

Grafana user for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_user VaultCluster#grafana_user}

---

###### `splunk_hecendpoint`<sup>Optional</sup> <a name="splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.splunkHecendpoint"></a>

- *Type:* str

Splunk endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

###### `splunk_token`<sup>Optional</sup> <a name="splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.splunkToken"></a>

- *Type:* str

Splunk token for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_token VaultCluster#splunk_token}

---

##### `put_major_version_upgrade_config` <a name="put_major_version_upgrade_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig"></a>

```python
def put_major_version_upgrade_config(
  upgrade_type: str,
  maintenance_window_day: str = None,
  maintenance_window_time: str = None
) -> None
```

###### `upgrade_type`<sup>Required</sup> <a name="upgrade_type" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig.parameter.upgradeType"></a>

- *Type:* str

The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#upgrade_type VaultCluster#upgrade_type}

---

###### `maintenance_window_day`<sup>Optional</sup> <a name="maintenance_window_day" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig.parameter.maintenanceWindowDay"></a>

- *Type:* str

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}

---

###### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig.parameter.maintenanceWindowTime"></a>

- *Type:* str

The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}

---

##### `put_metrics_config` <a name="put_metrics_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig"></a>

```python
def put_metrics_config(
  datadog_api_key: str = None,
  datadog_region: str = None,
  grafana_endpoint: str = None,
  grafana_password: str = None,
  grafana_user: str = None,
  splunk_hecendpoint: str = None,
  splunk_token: str = None
) -> None
```

###### `datadog_api_key`<sup>Optional</sup> <a name="datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.datadogApiKey"></a>

- *Type:* str

Datadog api key for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

###### `datadog_region`<sup>Optional</sup> <a name="datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.datadogRegion"></a>

- *Type:* str

Datadog region for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_region VaultCluster#datadog_region}

---

###### `grafana_endpoint`<sup>Optional</sup> <a name="grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.grafanaEndpoint"></a>

- *Type:* str

Grafana endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

###### `grafana_password`<sup>Optional</sup> <a name="grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.grafanaPassword"></a>

- *Type:* str

Grafana password for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_password VaultCluster#grafana_password}

---

###### `grafana_user`<sup>Optional</sup> <a name="grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.grafanaUser"></a>

- *Type:* str

Grafana user for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_user VaultCluster#grafana_user}

---

###### `splunk_hecendpoint`<sup>Optional</sup> <a name="splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.splunkHecendpoint"></a>

- *Type:* str

Splunk endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

###### `splunk_token`<sup>Optional</sup> <a name="splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.splunkToken"></a>

- *Type:* str

Splunk token for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_token VaultCluster#splunk_token}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#create VaultCluster#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#default VaultCluster#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#delete VaultCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#update VaultCluster#update}.

---

##### `reset_audit_log_config` <a name="reset_audit_log_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig"></a>

```python
def reset_audit_log_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_major_version_upgrade_config` <a name="reset_major_version_upgrade_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig"></a>

```python
def reset_major_version_upgrade_config() -> None
```

##### `reset_metrics_config` <a name="reset_metrics_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig"></a>

```python
def reset_metrics_config() -> None
```

##### `reset_min_vault_version` <a name="reset_min_vault_version" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion"></a>

```python
def reset_min_vault_version() -> None
```

##### `reset_paths_filter` <a name="reset_paths_filter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter"></a>

```python
def reset_paths_filter() -> None
```

##### `reset_primary_link` <a name="reset_primary_link" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink"></a>

```python
def reset_primary_link() -> None
```

##### `reset_public_endpoint` <a name="reset_public_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint"></a>

```python
def reset_public_endpoint() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultCluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig">audit_log_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig">major_version_upgrade_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl">vault_private_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl">vault_public_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion">vault_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput">audit_log_config_input</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput">major_version_upgrade_config_input</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput">metrics_config_input</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput">min_vault_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput">paths_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput">primary_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput">public_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion">min_vault_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter">paths_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink">primary_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint">public_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig"></a>

```python
audit_log_config: VaultClusterAuditLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a>

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `major_version_upgrade_config`<sup>Required</sup> <a name="major_version_upgrade_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig"></a>

```python
major_version_upgrade_config: VaultClusterMajorVersionUpgradeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a>

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig"></a>

```python
metrics_config: VaultClusterMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts"></a>

```python
timeouts: VaultClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a>

---

##### `vault_private_endpoint_url`<sup>Required</sup> <a name="vault_private_endpoint_url" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl"></a>

```python
vault_private_endpoint_url: str
```

- *Type:* str

---

##### `vault_public_endpoint_url`<sup>Required</sup> <a name="vault_public_endpoint_url" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl"></a>

```python
vault_public_endpoint_url: str
```

- *Type:* str

---

##### `vault_version`<sup>Required</sup> <a name="vault_version" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion"></a>

```python
vault_version: str
```

- *Type:* str

---

##### `audit_log_config_input`<sup>Optional</sup> <a name="audit_log_config_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput"></a>

```python
audit_log_config_input: VaultClusterAuditLogConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `major_version_upgrade_config_input`<sup>Optional</sup> <a name="major_version_upgrade_config_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput"></a>

```python
major_version_upgrade_config_input: VaultClusterMajorVersionUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `metrics_config_input`<sup>Optional</sup> <a name="metrics_config_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput"></a>

```python
metrics_config_input: VaultClusterMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `min_vault_version_input`<sup>Optional</sup> <a name="min_vault_version_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput"></a>

```python
min_vault_version_input: str
```

- *Type:* str

---

##### `paths_filter_input`<sup>Optional</sup> <a name="paths_filter_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput"></a>

```python
paths_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_link_input`<sup>Optional</sup> <a name="primary_link_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput"></a>

```python
primary_link_input: str
```

- *Type:* str

---

##### `public_endpoint_input`<sup>Optional</sup> <a name="public_endpoint_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput"></a>

```python
public_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VaultClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_vault_version`<sup>Required</sup> <a name="min_vault_version" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion"></a>

```python
min_vault_version: str
```

- *Type:* str

---

##### `paths_filter`<sup>Required</sup> <a name="paths_filter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter"></a>

```python
paths_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_link`<sup>Required</sup> <a name="primary_link" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink"></a>

```python
primary_link: str
```

- *Type:* str

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint"></a>

```python
public_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultClusterAuditLogConfig <a name="VaultClusterAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterAuditLogConfig(
  datadog_api_key: str = None,
  datadog_region: str = None,
  grafana_endpoint: str = None,
  grafana_password: str = None,
  grafana_user: str = None,
  splunk_hecendpoint: str = None,
  splunk_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | Datadog api key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion">datadog_region</a></code> | <code>str</code> | Datadog region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint">grafana_endpoint</a></code> | <code>str</code> | Grafana endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword">grafana_password</a></code> | <code>str</code> | Grafana password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser">grafana_user</a></code> | <code>str</code> | Grafana user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint">splunk_hecendpoint</a></code> | <code>str</code> | Splunk endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken">splunk_token</a></code> | <code>str</code> | Splunk token for streaming audit logs. |

---

##### `datadog_api_key`<sup>Optional</sup> <a name="datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

Datadog api key for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `datadog_region`<sup>Optional</sup> <a name="datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

Datadog region for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `grafana_endpoint`<sup>Optional</sup> <a name="grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint"></a>

```python
grafana_endpoint: str
```

- *Type:* str

Grafana endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `grafana_password`<sup>Optional</sup> <a name="grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword"></a>

```python
grafana_password: str
```

- *Type:* str

Grafana password for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `grafana_user`<sup>Optional</sup> <a name="grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser"></a>

```python
grafana_user: str
```

- *Type:* str

Grafana user for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `splunk_hecendpoint`<sup>Optional</sup> <a name="splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint"></a>

```python
splunk_hecendpoint: str
```

- *Type:* str

Splunk endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `splunk_token`<sup>Optional</sup> <a name="splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken"></a>

```python
splunk_token: str
```

- *Type:* str

Splunk token for streaming audit logs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterConfig <a name="VaultClusterConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  hvn_id: str,
  audit_log_config: VaultClusterAuditLogConfig = None,
  id: str = None,
  major_version_upgrade_config: VaultClusterMajorVersionUpgradeConfig = None,
  metrics_config: VaultClusterMetricsConfig = None,
  min_vault_version: str = None,
  paths_filter: typing.List[str] = None,
  primary_link: str = None,
  public_endpoint: typing.Union[bool, IResolvable] = None,
  tier: str = None,
  timeouts: VaultClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN this HCP Vault cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig">audit_log_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig">major_version_upgrade_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion">min_vault_version</a></code> | <code>str</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter">paths_filter</a></code> | <code>typing.List[str]</code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink">primary_link</a></code> | <code>str</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint">public_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the cluster has a public endpoint. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier">tier</a></code> | <code>str</code> | Tier of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `audit_log_config`<sup>Optional</sup> <a name="audit_log_config" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig"></a>

```python
audit_log_config: VaultClusterAuditLogConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `major_version_upgrade_config`<sup>Optional</sup> <a name="major_version_upgrade_config" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig"></a>

```python
major_version_upgrade_config: VaultClusterMajorVersionUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig"></a>

```python
metrics_config: VaultClusterMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `min_vault_version`<sup>Optional</sup> <a name="min_vault_version" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion"></a>

```python
min_vault_version: str
```

- *Type:* str

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `paths_filter`<sup>Optional</sup> <a name="paths_filter" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter"></a>

```python
paths_filter: typing.List[str]
```

- *Type:* typing.List[str]

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `primary_link`<sup>Optional</sup> <a name="primary_link" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink"></a>

```python
primary_link: str
```

- *Type:* str

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `public_endpoint`<sup>Optional</sup> <a name="public_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint"></a>

```python
public_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://cloud.hashicorp.com/pricing/vault). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#tier VaultCluster#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts"></a>

```python
timeouts: VaultClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#timeouts VaultCluster#timeouts}

---

### VaultClusterMajorVersionUpgradeConfig <a name="VaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterMajorVersionUpgradeConfig(
  upgrade_type: str,
  maintenance_window_day: str = None,
  maintenance_window_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType">upgrade_type</a></code> | <code>str</code> | The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay">maintenance_window_day</a></code> | <code>str</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`. |

---

##### `upgrade_type`<sup>Required</sup> <a name="upgrade_type" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType"></a>

```python
upgrade_type: str
```

- *Type:* str

The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#upgrade_type VaultCluster#upgrade_type}

---

##### `maintenance_window_day`<sup>Optional</sup> <a name="maintenance_window_day" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay"></a>

```python
maintenance_window_day: str
```

- *Type:* str

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}

---

##### `maintenance_window_time`<sup>Optional</sup> <a name="maintenance_window_time" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}

---

### VaultClusterMetricsConfig <a name="VaultClusterMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterMetricsConfig(
  datadog_api_key: str = None,
  datadog_region: str = None,
  grafana_endpoint: str = None,
  grafana_password: str = None,
  grafana_user: str = None,
  splunk_hecendpoint: str = None,
  splunk_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | Datadog api key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion">datadog_region</a></code> | <code>str</code> | Datadog region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint">grafana_endpoint</a></code> | <code>str</code> | Grafana endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword">grafana_password</a></code> | <code>str</code> | Grafana password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser">grafana_user</a></code> | <code>str</code> | Grafana user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint">splunk_hecendpoint</a></code> | <code>str</code> | Splunk endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken">splunk_token</a></code> | <code>str</code> | Splunk token for streaming metrics. |

---

##### `datadog_api_key`<sup>Optional</sup> <a name="datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

Datadog api key for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `datadog_region`<sup>Optional</sup> <a name="datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

Datadog region for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `grafana_endpoint`<sup>Optional</sup> <a name="grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint"></a>

```python
grafana_endpoint: str
```

- *Type:* str

Grafana endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `grafana_password`<sup>Optional</sup> <a name="grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword"></a>

```python
grafana_password: str
```

- *Type:* str

Grafana password for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `grafana_user`<sup>Optional</sup> <a name="grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser"></a>

```python
grafana_user: str
```

- *Type:* str

Grafana user for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `splunk_hecendpoint`<sup>Optional</sup> <a name="splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint"></a>

```python
splunk_hecendpoint: str
```

- *Type:* str

Splunk endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `splunk_token`<sup>Optional</sup> <a name="splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken"></a>

```python
splunk_token: str
```

- *Type:* str

Splunk token for streaming metrics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterTimeouts <a name="VaultClusterTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#create VaultCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#default VaultCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#delete VaultCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#update VaultCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#create VaultCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#default VaultCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#delete VaultCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/vault_cluster#update VaultCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultClusterAuditLogConfigOutputReference <a name="VaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterAuditLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey">reset_datadog_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion">reset_datadog_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint">reset_grafana_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword">reset_grafana_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser">reset_grafana_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint">reset_splunk_hecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken">reset_splunk_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datadog_api_key` <a name="reset_datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey"></a>

```python
def reset_datadog_api_key() -> None
```

##### `reset_datadog_region` <a name="reset_datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion"></a>

```python
def reset_datadog_region() -> None
```

##### `reset_grafana_endpoint` <a name="reset_grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint"></a>

```python
def reset_grafana_endpoint() -> None
```

##### `reset_grafana_password` <a name="reset_grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword"></a>

```python
def reset_grafana_password() -> None
```

##### `reset_grafana_user` <a name="reset_grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser"></a>

```python
def reset_grafana_user() -> None
```

##### `reset_splunk_hecendpoint` <a name="reset_splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint"></a>

```python
def reset_splunk_hecendpoint() -> None
```

##### `reset_splunk_token` <a name="reset_splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken"></a>

```python
def reset_splunk_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput">datadog_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput">datadog_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput">grafana_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput">grafana_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput">grafana_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput">splunk_hecendpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput">splunk_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion">datadog_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">grafana_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword">grafana_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser">grafana_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">splunk_hecendpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken">splunk_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datadog_api_key_input`<sup>Optional</sup> <a name="datadog_api_key_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput"></a>

```python
datadog_api_key_input: str
```

- *Type:* str

---

##### `datadog_region_input`<sup>Optional</sup> <a name="datadog_region_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput"></a>

```python
datadog_region_input: str
```

- *Type:* str

---

##### `grafana_endpoint_input`<sup>Optional</sup> <a name="grafana_endpoint_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput"></a>

```python
grafana_endpoint_input: str
```

- *Type:* str

---

##### `grafana_password_input`<sup>Optional</sup> <a name="grafana_password_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput"></a>

```python
grafana_password_input: str
```

- *Type:* str

---

##### `grafana_user_input`<sup>Optional</sup> <a name="grafana_user_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput"></a>

```python
grafana_user_input: str
```

- *Type:* str

---

##### `splunk_hecendpoint_input`<sup>Optional</sup> <a name="splunk_hecendpoint_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput"></a>

```python
splunk_hecendpoint_input: str
```

- *Type:* str

---

##### `splunk_token_input`<sup>Optional</sup> <a name="splunk_token_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput"></a>

```python
splunk_token_input: str
```

- *Type:* str

---

##### `datadog_api_key`<sup>Required</sup> <a name="datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

---

##### `datadog_region`<sup>Required</sup> <a name="datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

---

##### `grafana_endpoint`<sup>Required</sup> <a name="grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```python
grafana_endpoint: str
```

- *Type:* str

---

##### `grafana_password`<sup>Required</sup> <a name="grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword"></a>

```python
grafana_password: str
```

- *Type:* str

---

##### `grafana_user`<sup>Required</sup> <a name="grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```python
grafana_user: str
```

- *Type:* str

---

##### `splunk_hecendpoint`<sup>Required</sup> <a name="splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```python
splunk_hecendpoint: str
```

- *Type:* str

---

##### `splunk_token`<sup>Required</sup> <a name="splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken"></a>

```python
splunk_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: VaultClusterAuditLogConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---


### VaultClusterMajorVersionUpgradeConfigOutputReference <a name="VaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay">reset_maintenance_window_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime">reset_maintenance_window_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maintenance_window_day` <a name="reset_maintenance_window_day" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay"></a>

```python
def reset_maintenance_window_day() -> None
```

##### `reset_maintenance_window_time` <a name="reset_maintenance_window_time" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime"></a>

```python
def reset_maintenance_window_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput">maintenance_window_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput">maintenance_window_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput">upgrade_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">maintenance_window_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">maintenance_window_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">upgrade_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_window_day_input`<sup>Optional</sup> <a name="maintenance_window_day_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput"></a>

```python
maintenance_window_day_input: str
```

- *Type:* str

---

##### `maintenance_window_time_input`<sup>Optional</sup> <a name="maintenance_window_time_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput"></a>

```python
maintenance_window_time_input: str
```

- *Type:* str

---

##### `upgrade_type_input`<sup>Optional</sup> <a name="upgrade_type_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput"></a>

```python
upgrade_type_input: str
```

- *Type:* str

---

##### `maintenance_window_day`<sup>Required</sup> <a name="maintenance_window_day" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```python
maintenance_window_day: str
```

- *Type:* str

---

##### `maintenance_window_time`<sup>Required</sup> <a name="maintenance_window_time" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```python
maintenance_window_time: str
```

- *Type:* str

---

##### `upgrade_type`<sup>Required</sup> <a name="upgrade_type" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```python
upgrade_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```python
internal_value: VaultClusterMajorVersionUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---


### VaultClusterMetricsConfigOutputReference <a name="VaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey">reset_datadog_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion">reset_datadog_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint">reset_grafana_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword">reset_grafana_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser">reset_grafana_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint">reset_splunk_hecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken">reset_splunk_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datadog_api_key` <a name="reset_datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey"></a>

```python
def reset_datadog_api_key() -> None
```

##### `reset_datadog_region` <a name="reset_datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion"></a>

```python
def reset_datadog_region() -> None
```

##### `reset_grafana_endpoint` <a name="reset_grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint"></a>

```python
def reset_grafana_endpoint() -> None
```

##### `reset_grafana_password` <a name="reset_grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword"></a>

```python
def reset_grafana_password() -> None
```

##### `reset_grafana_user` <a name="reset_grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser"></a>

```python
def reset_grafana_user() -> None
```

##### `reset_splunk_hecendpoint` <a name="reset_splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint"></a>

```python
def reset_splunk_hecendpoint() -> None
```

##### `reset_splunk_token` <a name="reset_splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken"></a>

```python
def reset_splunk_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput">datadog_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput">datadog_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput">grafana_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput">grafana_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput">grafana_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput">splunk_hecendpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput">splunk_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion">datadog_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">grafana_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword">grafana_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser">grafana_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">splunk_hecendpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken">splunk_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datadog_api_key_input`<sup>Optional</sup> <a name="datadog_api_key_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput"></a>

```python
datadog_api_key_input: str
```

- *Type:* str

---

##### `datadog_region_input`<sup>Optional</sup> <a name="datadog_region_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput"></a>

```python
datadog_region_input: str
```

- *Type:* str

---

##### `grafana_endpoint_input`<sup>Optional</sup> <a name="grafana_endpoint_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput"></a>

```python
grafana_endpoint_input: str
```

- *Type:* str

---

##### `grafana_password_input`<sup>Optional</sup> <a name="grafana_password_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput"></a>

```python
grafana_password_input: str
```

- *Type:* str

---

##### `grafana_user_input`<sup>Optional</sup> <a name="grafana_user_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput"></a>

```python
grafana_user_input: str
```

- *Type:* str

---

##### `splunk_hecendpoint_input`<sup>Optional</sup> <a name="splunk_hecendpoint_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput"></a>

```python
splunk_hecendpoint_input: str
```

- *Type:* str

---

##### `splunk_token_input`<sup>Optional</sup> <a name="splunk_token_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput"></a>

```python
splunk_token_input: str
```

- *Type:* str

---

##### `datadog_api_key`<sup>Required</sup> <a name="datadog_api_key" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

---

##### `datadog_region`<sup>Required</sup> <a name="datadog_region" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

---

##### `grafana_endpoint`<sup>Required</sup> <a name="grafana_endpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```python
grafana_endpoint: str
```

- *Type:* str

---

##### `grafana_password`<sup>Required</sup> <a name="grafana_password" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword"></a>

```python
grafana_password: str
```

- *Type:* str

---

##### `grafana_user`<sup>Required</sup> <a name="grafana_user" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```python
grafana_user: str
```

- *Type:* str

---

##### `splunk_hecendpoint`<sup>Required</sup> <a name="splunk_hecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```python
splunk_hecendpoint: str
```

- *Type:* str

---

##### `splunk_token`<sup>Required</sup> <a name="splunk_token" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken"></a>

```python
splunk_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: VaultClusterMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---


### VaultClusterTimeoutsOutputReference <a name="VaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_cluster

vaultCluster.VaultClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VaultClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>, cdktf.IResolvable]

---


