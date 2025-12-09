# `vaultRadarSecretManagerVaultDedicated` Submodule <a name="`vaultRadarSecretManagerVaultDedicated` Submodule" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSecretManagerVaultDedicated <a name="VaultRadarSecretManagerVaultDedicated" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated hcp_vault_radar_secret_manager_vault_dedicated}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vault_url: str,
  access_read_write: bool | IResolvable = None,
  approle_push: VaultRadarSecretManagerVaultDedicatedApprolePush = None,
  kubernetes: VaultRadarSecretManagerVaultDedicatedKubernetes = None,
  project_id: str = None,
  token: VaultRadarSecretManagerVaultDedicatedToken = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.vaultUrl">vault_url</a></code> | <code>str</code> | Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.accessReadWrite">access_read_write</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates if the auth method has read and write access to the secrets engine. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.approlePush">approle_push</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | Configuration for AppRole Push-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | Configuration for Kubernetes-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | Configuration for token-based authentication. Only one authentication method may be configured. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `vault_url`<sup>Required</sup> <a name="vault_url" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.vaultUrl"></a>

- *Type:* str

Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}

---

##### `access_read_write`<sup>Optional</sup> <a name="access_read_write" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.accessReadWrite"></a>

- *Type:* bool | cdktf.IResolvable

Indicates if the auth method has read and write access to the secrets engine.

Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}

---

##### `approle_push`<sup>Optional</sup> <a name="approle_push" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.approlePush"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

Configuration for AppRole Push-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

Configuration for Kubernetes-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.token"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

Configuration for token-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush">put_approle_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken">put_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite">reset_access_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush">reset_approle_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approle_push` <a name="put_approle_push" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush"></a>

```python
def put_approle_push(
  mount_path: str,
  role_id_env_var: str,
  secret_id_env_var: str
) -> None
```

###### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush.parameter.mountPath"></a>

- *Type:* str

Mount path of the AppRole auth method in Vault. Example 'approle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

###### `role_id_env_var`<sup>Required</sup> <a name="role_id_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush.parameter.roleIdEnvVar"></a>

- *Type:* str

Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_id_env_var VaultRadarSecretManagerVaultDedicated#role_id_env_var}

---

###### `secret_id_env_var`<sup>Required</sup> <a name="secret_id_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush.parameter.secretIdEnvVar"></a>

- *Type:* str

Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#secret_id_env_var VaultRadarSecretManagerVaultDedicated#secret_id_env_var}

---

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes"></a>

```python
def put_kubernetes(
  mount_path: str,
  role_name: str
) -> None
```

###### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes.parameter.mountPath"></a>

- *Type:* str

Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

###### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes.parameter.roleName"></a>

- *Type:* str

Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_name VaultRadarSecretManagerVaultDedicated#role_name}

---

##### `put_token` <a name="put_token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken"></a>

```python
def put_token(
  token_env_var: str
) -> None
```

###### `token_env_var`<sup>Required</sup> <a name="token_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken.parameter.tokenEnvVar"></a>

- *Type:* str

Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token_env_var VaultRadarSecretManagerVaultDedicated#token_env_var}

---

##### `reset_access_read_write` <a name="reset_access_read_write" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite"></a>

```python
def reset_access_read_write() -> None
```

##### `reset_approle_push` <a name="reset_approle_push" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush"></a>

```python
def reset_approle_push() -> None
```

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultRadarSecretManagerVaultDedicated to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultRadarSecretManagerVaultDedicated that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSecretManagerVaultDedicated to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush">approle_push</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput">access_read_write_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput">approle_push_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput">kubernetes_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput">token_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput">vault_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite">access_read_write</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl">vault_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `approle_push`<sup>Required</sup> <a name="approle_push" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush"></a>

```python
approle_push: VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes"></a>

```python
kubernetes: VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token"></a>

```python
token: VaultRadarSecretManagerVaultDedicatedTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a>

---

##### `access_read_write_input`<sup>Optional</sup> <a name="access_read_write_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput"></a>

```python
access_read_write_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `approle_push_input`<sup>Optional</sup> <a name="approle_push_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput"></a>

```python
approle_push_input: IResolvable | VaultRadarSecretManagerVaultDedicatedApprolePush
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput"></a>

```python
kubernetes_input: IResolvable | VaultRadarSecretManagerVaultDedicatedKubernetes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput"></a>

```python
token_input: IResolvable | VaultRadarSecretManagerVaultDedicatedToken
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---

##### `vault_url_input`<sup>Optional</sup> <a name="vault_url_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput"></a>

```python
vault_url_input: str
```

- *Type:* str

---

##### `access_read_write`<sup>Required</sup> <a name="access_read_write" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite"></a>

```python
access_read_write: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `vault_url`<sup>Required</sup> <a name="vault_url" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl"></a>

```python
vault_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePush <a name="VaultRadarSecretManagerVaultDedicatedApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush(
  mount_path: str,
  role_id_env_var: str,
  secret_id_env_var: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath">mount_path</a></code> | <code>str</code> | Mount path of the AppRole auth method in Vault. Example 'approle'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar">role_id_env_var</a></code> | <code>str</code> | Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar">secret_id_env_var</a></code> | <code>str</code> | Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Mount path of the AppRole auth method in Vault. Example 'approle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `role_id_env_var`<sup>Required</sup> <a name="role_id_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar"></a>

```python
role_id_env_var: str
```

- *Type:* str

Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_id_env_var VaultRadarSecretManagerVaultDedicated#role_id_env_var}

---

##### `secret_id_env_var`<sup>Required</sup> <a name="secret_id_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar"></a>

```python
secret_id_env_var: str
```

- *Type:* str

Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#secret_id_env_var VaultRadarSecretManagerVaultDedicated#secret_id_env_var}

---

### VaultRadarSecretManagerVaultDedicatedConfig <a name="VaultRadarSecretManagerVaultDedicatedConfig" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vault_url: str,
  access_read_write: bool | IResolvable = None,
  approle_push: VaultRadarSecretManagerVaultDedicatedApprolePush = None,
  kubernetes: VaultRadarSecretManagerVaultDedicatedKubernetes = None,
  project_id: str = None,
  token: VaultRadarSecretManagerVaultDedicatedToken = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl">vault_url</a></code> | <code>str</code> | Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite">access_read_write</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates if the auth method has read and write access to the secrets engine. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush">approle_push</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | Configuration for AppRole Push-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | Configuration for Kubernetes-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | Configuration for token-based authentication. Only one authentication method may be configured. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `vault_url`<sup>Required</sup> <a name="vault_url" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl"></a>

```python
vault_url: str
```

- *Type:* str

Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}

---

##### `access_read_write`<sup>Optional</sup> <a name="access_read_write" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite"></a>

```python
access_read_write: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates if the auth method has read and write access to the secrets engine.

Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}

---

##### `approle_push`<sup>Optional</sup> <a name="approle_push" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush"></a>

```python
approle_push: VaultRadarSecretManagerVaultDedicatedApprolePush
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

Configuration for AppRole Push-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes"></a>

```python
kubernetes: VaultRadarSecretManagerVaultDedicatedKubernetes
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

Configuration for Kubernetes-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token"></a>

```python
token: VaultRadarSecretManagerVaultDedicatedToken
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

Configuration for token-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}

---

### VaultRadarSecretManagerVaultDedicatedKubernetes <a name="VaultRadarSecretManagerVaultDedicatedKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes(
  mount_path: str,
  role_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath">mount_path</a></code> | <code>str</code> | Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName">role_name</a></code> | <code>str</code> | Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_name VaultRadarSecretManagerVaultDedicated#role_name}

---

### VaultRadarSecretManagerVaultDedicatedToken <a name="VaultRadarSecretManagerVaultDedicatedToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken(
  token_env_var: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar">token_env_var</a></code> | <code>str</code> | Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'. |

---

##### `token_env_var`<sup>Required</sup> <a name="token_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar"></a>

```python
token_env_var: str
```

- *Type:* str

Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token_env_var VaultRadarSecretManagerVaultDedicated#token_env_var}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference <a name="VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput">role_id_env_var_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput">secret_id_env_var_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar">role_id_env_var</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar">secret_id_env_var</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `role_id_env_var_input`<sup>Optional</sup> <a name="role_id_env_var_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput"></a>

```python
role_id_env_var_input: str
```

- *Type:* str

---

##### `secret_id_env_var_input`<sup>Optional</sup> <a name="secret_id_env_var_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput"></a>

```python
secret_id_env_var_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `role_id_env_var`<sup>Required</sup> <a name="role_id_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar"></a>

```python
role_id_env_var: str
```

- *Type:* str

---

##### `secret_id_env_var`<sup>Required</sup> <a name="secret_id_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar"></a>

```python
secret_id_env_var: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultRadarSecretManagerVaultDedicatedApprolePush
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---


### VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference <a name="VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultRadarSecretManagerVaultDedicatedKubernetes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---


### VaultRadarSecretManagerVaultDedicatedTokenOutputReference <a name="VaultRadarSecretManagerVaultDedicatedTokenOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_secret_manager_vault_dedicated

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput">token_env_var_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar">token_env_var</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_env_var_input`<sup>Optional</sup> <a name="token_env_var_input" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput"></a>

```python
token_env_var_input: str
```

- *Type:* str

---

##### `token_env_var`<sup>Required</sup> <a name="token_env_var" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar"></a>

```python
token_env_var: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultRadarSecretManagerVaultDedicatedToken
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---



