# `vaultSecretsIntegrationGcp` Submodule <a name="`vaultSecretsIntegrationGcp` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationGcp <a name="VaultSecretsIntegrationGcp" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp hcp_vault_secrets_integration_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capabilities: typing.List[str],
  name: str,
  federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity = None,
  project_id: str = None,
  service_account_key: VaultSecretsIntegrationGcpServiceAccountKey = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.name">name</a></code> | <code>str</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.federatedWorkloadIdentity">federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.serviceAccountKey">service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#capabilities VaultSecretsIntegrationGcp#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.name"></a>

- *Type:* str

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#name VaultSecretsIntegrationGcp#name}

---

##### `federated_workload_identity`<sup>Optional</sup> <a name="federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.federatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#federated_workload_identity VaultSecretsIntegrationGcp#federated_workload_identity}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.projectId"></a>

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#project_id VaultSecretsIntegrationGcp#project_id}

---

##### `service_account_key`<sup>Optional</sup> <a name="service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.serviceAccountKey"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#service_account_key VaultSecretsIntegrationGcp#service_account_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity">put_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putServiceAccountKey">put_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetFederatedWorkloadIdentity">reset_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetServiceAccountKey">reset_service_account_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_federated_workload_identity` <a name="put_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity"></a>

```python
def put_federated_workload_identity(
  audience: str,
  service_account_email: str
) -> None
```

###### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity.parameter.audience"></a>

- *Type:* str

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#audience VaultSecretsIntegrationGcp#audience}

---

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity.parameter.serviceAccountEmail"></a>

- *Type:* str

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#service_account_email VaultSecretsIntegrationGcp#service_account_email}

---

##### `put_service_account_key` <a name="put_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putServiceAccountKey"></a>

```python
def put_service_account_key(
  credentials: str
) -> None
```

###### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putServiceAccountKey.parameter.credentials"></a>

- *Type:* str

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#credentials VaultSecretsIntegrationGcp#credentials}

---

##### `reset_federated_workload_identity` <a name="reset_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetFederatedWorkloadIdentity"></a>

```python
def reset_federated_workload_identity() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_service_account_key` <a name="reset_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetServiceAccountKey"></a>

```python
def reset_service_account_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationGcp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultSecretsIntegrationGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultSecretsIntegrationGcp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultSecretsIntegrationGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentity">federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKey">service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentityInput">federated_workload_identity_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKeyInput">service_account_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federated_workload_identity`<sup>Required</sup> <a name="federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentity"></a>

```python
federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `service_account_key`<sup>Required</sup> <a name="service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKey"></a>

```python
service_account_key: VaultSecretsIntegrationGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `federated_workload_identity_input`<sup>Optional</sup> <a name="federated_workload_identity_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentityInput"></a>

```python
federated_workload_identity_input: typing.Union[IResolvable, VaultSecretsIntegrationGcpFederatedWorkloadIdentity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `service_account_key_input`<sup>Optional</sup> <a name="service_account_key_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKeyInput"></a>

```python
service_account_key_input: typing.Union[IResolvable, VaultSecretsIntegrationGcpServiceAccountKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationGcpConfig <a name="VaultSecretsIntegrationGcpConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capabilities: typing.List[str],
  name: str,
  federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity = None,
  project_id: str = None,
  service_account_key: VaultSecretsIntegrationGcpServiceAccountKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.name">name</a></code> | <code>str</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.federatedWorkloadIdentity">federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.serviceAccountKey">service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#capabilities VaultSecretsIntegrationGcp#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#name VaultSecretsIntegrationGcp#name}

---

##### `federated_workload_identity`<sup>Optional</sup> <a name="federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.federatedWorkloadIdentity"></a>

```python
federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#federated_workload_identity VaultSecretsIntegrationGcp#federated_workload_identity}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#project_id VaultSecretsIntegrationGcp#project_id}

---

##### `service_account_key`<sup>Optional</sup> <a name="service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.serviceAccountKey"></a>

```python
service_account_key: VaultSecretsIntegrationGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#service_account_key VaultSecretsIntegrationGcp#service_account_key}

---

### VaultSecretsIntegrationGcpFederatedWorkloadIdentity <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity(
  audience: str,
  service_account_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>str</code> | Audience configured on the GCP identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#audience VaultSecretsIntegrationGcp#audience}

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#service_account_email VaultSecretsIntegrationGcp#service_account_email}

---

### VaultSecretsIntegrationGcpServiceAccountKey <a name="VaultSecretsIntegrationGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey(
  credentials: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials">credentials</a></code> | <code>str</code> | JSON or base64 encoded service account key received from GCP. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/resources/vault_secrets_integration_gcp#credentials VaultSecretsIntegrationGcp#credentials}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretsIntegrationGcpFederatedWorkloadIdentity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>]

---


### VaultSecretsIntegrationGcpServiceAccountKeyOutputReference <a name="VaultSecretsIntegrationGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration_gcp

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretsIntegrationGcpServiceAccountKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>]

---



