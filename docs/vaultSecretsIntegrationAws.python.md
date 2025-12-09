# `vaultSecretsIntegrationAws` Submodule <a name="`vaultSecretsIntegrationAws` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationAws <a name="VaultSecretsIntegrationAws" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws hcp_vault_secrets_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAws(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capabilities: typing.List[str],
  name: str,
  access_keys: VaultSecretsIntegrationAwsAccessKeysA = None,
  federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentityA = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.name">name</a></code> | <code>str</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.accessKeys">access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.federatedWorkloadIdentity">federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#capabilities VaultSecretsIntegrationAws#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.name"></a>

- *Type:* str

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#name VaultSecretsIntegrationAws#name}

---

##### `access_keys`<sup>Optional</sup> <a name="access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.accessKeys"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#access_keys VaultSecretsIntegrationAws#access_keys}

---

##### `federated_workload_identity`<sup>Optional</sup> <a name="federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.federatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#federated_workload_identity VaultSecretsIntegrationAws#federated_workload_identity}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.Initializer.parameter.projectId"></a>

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#project_id VaultSecretsIntegrationAws#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys">put_access_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity">put_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetAccessKeys">reset_access_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetFederatedWorkloadIdentity">reset_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_keys` <a name="put_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys"></a>

```python
def put_access_keys(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys.parameter.accessKeyId"></a>

- *Type:* str

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#access_key_id VaultSecretsIntegrationAws#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putAccessKeys.parameter.secretAccessKey"></a>

- *Type:* str

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#secret_access_key VaultSecretsIntegrationAws#secret_access_key}

---

##### `put_federated_workload_identity` <a name="put_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity"></a>

```python
def put_federated_workload_identity(
  audience: str,
  role_arn: str
) -> None
```

###### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity.parameter.audience"></a>

- *Type:* str

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#audience VaultSecretsIntegrationAws#audience}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.putFederatedWorkloadIdentity.parameter.roleArn"></a>

- *Type:* str

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#role_arn VaultSecretsIntegrationAws#role_arn}

---

##### `reset_access_keys` <a name="reset_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetAccessKeys"></a>

```python
def reset_access_keys() -> None
```

##### `reset_federated_workload_identity` <a name="reset_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetFederatedWorkloadIdentity"></a>

```python
def reset_federated_workload_identity() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationAws resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultSecretsIntegrationAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultSecretsIntegrationAws to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultSecretsIntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeys">access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference">VaultSecretsIntegrationAwsAccessKeysAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentity">federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeysInput">access_keys_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentityInput">federated_workload_identity_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `access_keys`<sup>Required</sup> <a name="access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeys"></a>

```python
access_keys: VaultSecretsIntegrationAwsAccessKeysAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference">VaultSecretsIntegrationAwsAccessKeysAOutputReference</a>

---

##### `federated_workload_identity`<sup>Required</sup> <a name="federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentity"></a>

```python
federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `access_keys_input`<sup>Optional</sup> <a name="access_keys_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.accessKeysInput"></a>

```python
access_keys_input: IResolvable | VaultSecretsIntegrationAwsAccessKeysA
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `federated_workload_identity_input`<sup>Optional</sup> <a name="federated_workload_identity_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.federatedWorkloadIdentityInput"></a>

```python
federated_workload_identity_input: IResolvable | VaultSecretsIntegrationAwsFederatedWorkloadIdentityA
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAws.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAwsAccessKeysA <a name="VaultSecretsIntegrationAwsAccessKeysA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Key ID used with the secret key to authenticate against the target AWS account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Secret key used with the key ID to authenticate against the target AWS account. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#access_key_id VaultSecretsIntegrationAws#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#secret_access_key VaultSecretsIntegrationAws#secret_access_key}

---

### VaultSecretsIntegrationAwsConfig <a name="VaultSecretsIntegrationAwsConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capabilities: typing.List[str],
  name: str,
  access_keys: VaultSecretsIntegrationAwsAccessKeysA = None,
  federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentityA = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.name">name</a></code> | <code>str</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.accessKeys">access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.federatedWorkloadIdentity">federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#capabilities VaultSecretsIntegrationAws#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#name VaultSecretsIntegrationAws#name}

---

##### `access_keys`<sup>Optional</sup> <a name="access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.accessKeys"></a>

```python
access_keys: VaultSecretsIntegrationAwsAccessKeysA
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#access_keys VaultSecretsIntegrationAws#access_keys}

---

##### `federated_workload_identity`<sup>Optional</sup> <a name="federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.federatedWorkloadIdentity"></a>

```python
federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentityA
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#federated_workload_identity VaultSecretsIntegrationAws#federated_workload_identity}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#project_id VaultSecretsIntegrationAws#project_id}

---

### VaultSecretsIntegrationAwsFederatedWorkloadIdentityA <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA(
  audience: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.audience">audience</a></code> | <code>str</code> | Audience configured on the AWS IAM identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.roleArn">role_arn</a></code> | <code>str</code> | AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#audience VaultSecretsIntegrationAws#audience}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_secrets_integration_aws#role_arn VaultSecretsIntegrationAws#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAwsAccessKeysAOutputReference <a name="VaultSecretsIntegrationAwsAccessKeysAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationAwsAccessKeysA
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsAccessKeysA">VaultSecretsIntegrationAwsAccessKeysA</a>

---


### VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_aws

vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationAwsFederatedWorkloadIdentityA
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAws.VaultSecretsIntegrationAwsFederatedWorkloadIdentityA">VaultSecretsIntegrationAwsFederatedWorkloadIdentityA</a>

---



